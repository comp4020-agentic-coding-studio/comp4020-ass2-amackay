import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// The promises this course makes that the build cannot check on its own:
// the shape of the twelve weeks, the calendar the listing pages describe,
// the assessment that adds up, and the rule that every outside claim points
// at a listed source. Each test reads the built API, so a change of approach
// that keeps the promise keeps the test.

interface ApiNode {
  id: string;
  type: string;
  title: string;
  related: string[];
  spec?: string[];
  meta?: Record<string, unknown>;
}

interface NodeDetail extends ApiNode {
  links: { label: string; url: string }[];
  body: string;
}

interface CourseApi {
  course: { startDate: string; endDate: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const sources = JSON.parse(readFileSync(resolve("spec/sources.json"), "utf8")) as string[];

const ofType = (type: string) => api.nodes.filter((node) => node.type === type);
const week = (node: ApiNode) => Number(node.meta?.week);
const dateOf = (node: ApiNode) => String(node.meta?.date ?? node.meta?.due).slice(0, 10);
const weekday = (iso: string) => new Date(`${iso}T00:00:00Z`).getUTCDay();
const detail = (node: ApiNode): NodeDetail =>
  JSON.parse(readFileSync(resolve(`dist/api/${node.id}.json`), "utf8")) as NodeDetail;

describe("twelve weeks", () => {
  it("each has exactly one lecture and one lab", () => {
    for (const w of Array.from({ length: 12 }, (_, i) => i + 1)) {
      expect(ofType("lectures").filter((n) => week(n) === w), `lectures in week ${w}`).toHaveLength(1);
      expect(ofType("sessions").filter((n) => week(n) === w), `labs in week ${w}`).toHaveLength(1);
    }
  });

  it("holds the lecture on a Monday and the lab two days later", () => {
    for (const lecture of ofType("lectures")) {
      const lab = ofType("sessions").find((n) => week(n) === week(lecture));
      expect(lab, `week ${week(lecture)} has a lab`).toBeDefined();
      expect(weekday(dateOf(lecture)), `${lecture.id} is on a Monday`).toBe(1);
      const gap = (Date.parse(dateOf(lab as ApiNode)) - Date.parse(dateOf(lecture))) / 86_400_000;
      expect(gap, `${lecture.id} and its lab are two days apart`).toBe(2);
    }
  });

  it("links every lecture to its own week's lab", () => {
    for (const lecture of ofType("lectures")) {
      const lab = ofType("sessions").find((n) => week(n) === week(lecture)) as ApiNode;
      expect(lecture.related, `${lecture.id} relates to ${lab.id}`).toContain(lab.id);
    }
  });

  it("gives every lecture a deck that built", () => {
    for (const lecture of ofType("lectures")) {
      const slug = `week-${String(week(lecture)).padStart(2, "0")}`;
      expect(lecture.meta?.slides, `${lecture.id} names its deck`).toBe(`/decks/${slug}/`);
      expect(existsSync(resolve(`dist/decks/${slug}/index.html`)), `${slug} built`).toBe(true);
    }
  });
});

describe("assessment", () => {
  it("adds up to 100", () => {
    const total = ofType("assessments").reduce((sum, n) => sum + Number(n.meta?.weight), 0);
    expect(total).toBe(100);
  });

  it("states a contract on everything that is marked", () => {
    for (const node of [...ofType("assessments"), ...ofType("sessions")]) {
      expect(node.spec?.length ?? 0, `${node.id} has spec lines`).toBeGreaterThan(0);
    }
  });

  it("is due inside the teaching period, no earlier than the week it is set", () => {
    for (const node of ofType("assessments")) {
      const setIn = ofType("lectures").find((n) => week(n) === week(node)) as ApiNode;
      expect(dateOf(node) >= dateOf(setIn), `${node.id} is due after it is set`).toBe(true);
      expect(dateOf(node) <= api.course.endDate, `${node.id} is due before teaching ends`).toBe(true);
    }
  });
});

describe("sources", () => {
  const external = /\]\((https?:\/\/[^)\s]+)\)/g;

  it("lists every outside link the site makes", () => {
    const listed = new Set(sources);
    for (const node of api.nodes) {
      const full = detail(node);
      const urls = [
        ...full.links.map((l) => l.url),
        ...Array.from(full.body.matchAll(external), (m) => m[1]),
      ];
      for (const url of urls) {
        expect(listed.has(url), `${node.id} links ${url}, which is not in spec/sources.json`).toBe(true);
      }
    }
  });

  it("carries no source the site does not use", () => {
    const used = new Set<string>();
    for (const node of api.nodes) {
      const full = detail(node);
      for (const l of full.links) used.add(l.url);
      for (const m of full.body.matchAll(external)) used.add(m[1]);
    }
    for (const url of sources) expect(used.has(url), `${url} is listed but unused`).toBe(true);
  });
});
