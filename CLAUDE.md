# Metamath 101 — agent harness

Assignment 2: one niche Slop University course, built as the website its
students would use. The brief and spec are published on the course site; read
them there, since a paraphrase here would be one more thing to keep true. The
platform is fixed and documented in `README.md`. The course is `SLOP2373
Metamath 101`, and its record lives in `src/course-config.ts` and nowhere else.

## The work, not the marks

Weigh every choice on whether it makes the work better. Don't frame advice
around marks, and don't hedge a decision because a marker might misread it.

The published spec is the contract, in full and in spirit: build to it as
written rather than reinterpreting it into something easier. A constraint that
looks skippable is exactly the one to keep.

## Three voices, never blurred

Everything committed goes public at the cutoff and is read by people who were
not in the session. There are three voices: the **owner's** (decisions and
reasons), the **agent's** (what it did, tried and chose between, and why), and
the **site's** (the course, in its own register).

- **Never write as the owner.** No first person on the owner's behalf in
  commits, docs or site copy. A direction given without a rationale is recorded
  as a direction ("per instruction: …"); a guessed "why" published as the
  owner's is a misattribution even when the guess is right.
- **Agent reasoning is welcome when owned.** "Chose X because Y" is fine as
  the agent's engineering judgement, never dressed up as the owner's
  philosophy.
- **The site carries no exposition about itself.** It talks about its subject.
  Test any sentence: would it exist if the course had simply always been this
  way? If it only explains or defends a decision, it belongs in `PROCESS.md`
  or a commit body.
- **Public prose gets the owner's review before the repo goes public.** Site
  copy, `README.md`, `PROCESS.md`: anything that could be read as carrying the
  owner's voice or judgement is read by the owner before the site ships. A
  session lands its work on `main` without waiting for that review; the review
  is of the whole, before the flip. Code and data don't need it.

## Prose

For any piece of prose, ask what its reader knows and doesn't know at that
point, what would be useful to them, and what they want to know. Deliver that
as quickly as possible, and don't assume they will read to the end: front-load
accordingly. Almost every file here is prose a prospective student reads, and a
reader goes far slower than this harness writes. The rules below are that one
applied.

- **Duplication is drift.** A fact has one owner: the course record in
  `src/course-config.ts`, a node's frontmatter, the page that introduces a
  term. Any other sentence restating it goes quietly wrong when the owner
  changes. Prose cannot factor a duplicate out, so delete it and link to the
  owner instead.
- **A section that exists asks to be filled.** Copy expands to the space it is
  given, and then the space is cited as proof it was needed. A schema field, a
  heading or a week is not a brief. Size each one to the copy that earns its
  way in, and let weeks differ in length when their content does.
- **A specialist term has to pay the reader back**, usually with a name they
  can search. Write for someone with no background in the subject; the
  plain-words version wins even when it runs longer. A term that survives is
  linked inline at its first mention, not in a list at the end.
- **Brevity is not the measure; time to understanding is.** Spend words to save
  the reader effort, never the reader's effort to save imprecision. The first
  sentence gets read, the fourth may not. The `description` fields and alt text
  are where the reader has nothing yet, so describing is the whole job there.

## Every claim about Metamath has a source

The course links its sources so that a reader can check them. That is a
property of the site, not a sentence on it.

- **Nothing from recall.** A statement about Metamath — what a tool does, what
  a database contains, who wrote what and when — is made only where a public
  page says it, and that page is linked inline at the claim. A plausible
  author's name or date that arrives unbidden is the easiest way to break this.
- **Quote or write.** A quotation is exact, in quotation marks, and attributed.
  Anything else is the site's own words and is not presented as the source's.
- **A count is true at a commit.** Anything asserted about a living database —
  how many theorems, whether one exists, how large the file is — is pinned to
  the commit it was measured at, or left out.
- **Where the record is silent, the course is too.** Who maintains a page, why
  a design was chosen, what happened in a project's early years: say what is
  documented and stop. No cautionary tale the site cannot source.
- **The course's own material needs no citation.** Its labs, assessments,
  marking and schedule are the course speaking for itself.
- **`spec/` holds the mechanical half**: every external link the site carries
  is on the course's source list. Whether a claim actually follows from its
  source is a reading, and a person does it.

## Standalone

- **Every doc makes complete sense to someone holding only this repo.** A
  sentence that depends on the owner's machine or other work is wrong before it
  is a leak.
- **Nothing committed reveals the owner's other repos**: not their names,
  paths or internals, in docs, comments or commit messages. Provenance for a
  copied file is one line citing its canonical public source. If other work
  informed a decision, state the decision in this repo's own terms.
- **No absolute paths.** Everything refers to files relative to the repo root.
  A home-directory path leaks one machine's layout and ties the repo to it.
  Check any match; a URL can contain `/home/` legitimately.

## Prose budget

- **Commit messages:** one imperative summary line. A body only when the diff
  cannot speak for itself, and then facts, never reasoning attributed to the
  owner.
- **Working notes are not kept here.** Public files get conclusions; the
  journey is the commit history and, where it matters, `PROCESS.md`.
- **Delete stale prose in the commit that makes it stale.** A short doc that is
  currently true beats a long one that is historically complete; git history
  is the archive.

## Landing work

- **A session works on its own branch** and lands each change as it is
  finished: push, open a pull request into `main`, merge it with the rebase
  method, so `main` stays linear and every commit keeps its own message. The
  history is read as evidence, and a trail that grew with the work is the
  point; one batch at the end is not.
- **Never force-push, and never rewrite `main`.**
- **`pnpm check` before a push, `pnpm check:evidence` before the flip.** A
  change landed somewhere the checks could not run says so in its commit body,
  so the next session knows to run them first.
- **Every `STARTER_CONTENT` marker is removed with the content it marks**, and
  the template's imagery is replaced, not edited: `pnpm check:evidence` hashes
  it.

## PROCESS.md

The narrative in `PROCESS.md` belongs to the repo owner; never draft, edit or
pad it. The agent may maintain a candidate-citations list at its foot: a commit
hash with one factual line about what the commit did, no interpretation. If
`PROCESS.md` is still unwritten near the cutoff, say so.
