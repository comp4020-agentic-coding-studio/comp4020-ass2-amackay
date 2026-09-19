# Process overview

<!-- TEMPLATE: this file is a shape to fill in, not a form. Replace everything
     in it with your own overview, and delete this comment — `pnpm
     check:evidence` will remind you if it's still here. -->

Written by you, for a reader: how you got from the brief to the harness and
agentic workflow behind this submission. Markers read this file and follow its
citations; they don't trawl the repo for evidence you didn't point at.

This file is the shape; the course site's
[assessment page](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#what-you-submit)
is the requirement, and its
[word counts](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/topics/assessment/#word-counts)
cover every deliverable.

## What I built

One paragraph: the thing, and the idea behind it.

## How I got here

The account of the process: how the work actually went, and how you knew the
result was right. Tell it in whatever order makes it clear. A weekly prototype
needs a paragraph or two; an assignment needs more.

Cite the record as you go, as links whose text is the commit hash or range and
whose target is this repo's commit or compare URL, so a reader clicks straight
to the evidence:

- one commit: [`a1b2c3d`](https://github.com/YOUR-ORG/YOUR-REPO/commit/a1b2c3d)
- a range:
  [`a1b2c3d...e4f5a6b`](https://github.com/YOUR-ORG/YOUR-REPO/compare/a1b2c3d...e4f5a6b)

To pair a prompt with the commit it produced, quote the prompt (curated, not a
full transcript) next to the citation:

> the prompt, verbatim

Screenshots are welcome where one carries the point better than a sentence does.
Commit the file to this repo and link it with a **relative** path, which is what
makes it render on GitHub: `![alt text](docs/before.png)`. Images don't count
towards the word count and don't replace the citation.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.

## Candidate citations

Maintained by the agent: one line per commit, what it did, no interpretation.

- `c96e42c` — rewrote `CLAUDE.md`: the prose rule, the sourcing rule, the review rule, the landing workflow.
- `1d5a11e` — filled in the course record, the two staff pages, the policies page, the home page and listing intros, and the card and hero artwork.
- `fd42780` — wrote the twelve lectures and twelve labs; every claim about Metamath links its public source.
- `65c5013` — wrote the three assessments: lab proofs 30%, the definition exercise 20%, the verifier project 50%.
- `55c2fcd` — wrote the week 1 deck, 16 slides with speaker notes.
- `a882e6a` — added `spec/course-promises.test.ts` and `spec/sources.json`: the twelve-week shape, the calendar, the assessment sum, and the list of every outside link.
- `2e254ff` — refined weeks 10 to 12 after review: quotations cut at the source's words, axioms pointed at the Proof Explorer.
- `3dc1b65` — set the level to 3 (`SLOP3373`), rewrote the verifier project (any language but C, C++, Rust, Java or Python; marked against a course-provided suite; details to follow), made the week 8 lab a check-in, removed the review rule from `CLAUDE.md`.
- `179a1db` — dropped the last mention of the peano.mm milestone, in lab 2.
- `35a0691` — wrote decks for weeks 2 to 12 and made the spec expect a built deck on every lecture.
