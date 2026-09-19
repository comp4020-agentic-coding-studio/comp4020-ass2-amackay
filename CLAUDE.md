# A SlopU course site — agent harness

Assignment 2: one niche Slop University course, built as the website its
students would use. The brief and spec are published on the course site; read
them there, since a paraphrase here would be one more thing to keep true. The
platform is fixed and documented in `README.md`.

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
- **Public prose gets the owner's review.** Site copy, `README.md`,
  `PROCESS.md`: anything that could be read as carrying the owner's voice or
  judgement is reviewed before it ships. Code and data don't need this.

## Prose budget

- **Commit messages:** one imperative summary line. A body only when the diff
  cannot speak for itself, and then facts, never reasoning attributed to the
  owner.
- **Working memory goes in `.claude/notes.md`** (gitignored, never public):
  dead ends, failed approaches, do-not-retry notes, as detailed as useful.
  Public files get conclusions; the notes file gets the journey.
- **Delete stale prose in the commit that makes it stale.** A short doc that is
  currently true beats a long one that is historically complete; git history
  is the archive.
- **No absolute paths.** Everything refers to files relative to the repo root.
  A home-directory path leaks one machine's layout and ties the repo to it.
  Check any match; a URL can contain `/home/` legitimately.

## Standalone

- **Every doc makes complete sense to someone holding only this repo.** A
  sentence that depends on the owner's machine or other work is wrong before it
  is a leak.
- **Nothing committed reveals the owner's other repos**: not their names,
  paths or internals, in docs, comments or commit messages. Provenance for a
  copied file is one line citing its canonical public source. If other work
  informed a decision, state the decision in this repo's own terms.

## Prose is the complement of the site

Almost every file here is prose a prospective student reads. Reading is not
free, and a reader goes far slower than this harness writes.

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
  the reader effort, never the reader's effort to save imprecision. Front-load:
  the first sentence gets read, the fourth may not. The `description` fields
  and alt text are where the reader has nothing yet, so describing is the
  whole job there.

## PROCESS.md

The narrative in `PROCESS.md` belongs to the repo owner; never draft, edit or
pad it. The agent may maintain a candidate-citations list at its foot: a commit
hash with one factual line about what the commit did, no interpretation. If
`PROCESS.md` is still unwritten near the cutoff, say so.
