---
title: set.mm and the Proof Explorer
description:
  The set.mm database, the web pages generated from it, the theorem list as its
  table of contents, how it cites books, and where its history is kept.
week: 4
date: 2027-03-15
teachers:
  - noor-castellane
slides: /decks/week-04/
related:
  - sessions/04-navigate-and-prove
  - assessments/lab-proofs
links:
  - label: metamath/set.mm repository
    url: https://github.com/metamath/set.mm
  - label: set.mm README
    url: https://github.com/metamath/set.mm/blob/develop/README.md
  - label: Metamath Proof Explorer home page
    url: https://us.metamath.org/mpeuni/mmset.html
  - label: Theorem List (Table of Contents)
    url: https://us.metamath.org/mpeuni/mmtheorems.html
  - label: Bibliographic Cross-Reference
    url: https://us.metamath.org/mpeuni/mmbiblio.html
  - label: sorear/set.mm-history
    url: https://github.com/sorear/set.mm-history
  - label: "Video: Metamath Proof Explorer: A Modern Principia Mathematica"
    url: https://www.youtube.com/watch?v=8WH4Rd4UKGE
  - label: "Video: set.mm contributions visualized with Gource"
    url: https://www.youtube.com/watch?v=XC1g8FmFcUU
  - label: Other Metamath-related topics
    url: https://us.metamath.org/other.html
---

set.mm is the database the rest of the course works in: one text file of
axioms, definitions, theorems and proofs, kept in the
[metamath/set.mm repository](https://github.com/metamath/set.mm). Its
[README](https://github.com/metamath/set.mm/blob/develop/README.md)
describes the repository as "a collection of rigorously verified Metamath
databases that specify mathematical axioms and formal proofs of theorems
derived from those axioms", and says set.mm "uses classical logic and
Zermelo–Fraenkel set theory with the axiom of choice (ZFC)". Proofs in the file
are stored compressed, and the same page says tools "can easily decompress them
to provide a human-readable sequence of every proof step". Every change is
checked before it is accepted: "Changes ("commits") to any database are first
automatically verified before they are accepted, using GitHub actions."

The same file, rendered as one web page per statement, is the
[Metamath Proof Explorer](https://us.metamath.org/mpeuni/mmset.html). Its home
page's section
[How Metamath Proofs Work](https://us.metamath.org/mpeuni/mmset.html#proofs)
takes apart one step of the proof of 2 + 2 = 4 and says "The only rule you need
to know in order to follow the symbol manipulations in a Metamath proof is
substitution." The
[Theorem List](https://us.metamath.org/mpeuni/mmtheorems.html) is the table of
contents: Part 1 is classical first-order logic with equality, Part 2
Zermelo–Fraenkel set theory, Part 3 ZFC, and later parts run through real and
complex numbers, number theory, algebra and topology. Section 1.2,
Propositional calculus, is where this week's lab works.

A theorem's description cites a book by a bracketed label such as [Tarski] or
[Megill]; the home page's
[Bibliography](https://us.metamath.org/mpeuni/mmset.html#bib) expands each
label to a full citation, and the
[Bibliographic Cross-Reference](https://us.metamath.org/mpeuni/mmbiblio.html)
"collects in one place the bibliographic references made in the Metamath Proof
Explorer's axiom, definition, and theorem Descriptions", so that "If you are
studying a particular set theory book, this list can be handy for finding out
where any corresponding Metamath theorems might be located."

Old versions of the file live in a separate repository,
[sorear/set.mm-history](https://github.com/sorear/set.mm-history), whose
README says "Each revision corresponds to an archived version of set.mm" and
warns that "you cannot assume old versions of set.mm can be loaded unmodified
in current versions of metamath."

## Read

- [Metamath Proof Explorer: A Modern Principia Mathematica](https://www.youtube.com/watch?v=8WH4Rd4UKGE)
  — David A. Wheeler's 2016 talk, listed on the site's
  [other topics page](https://us.metamath.org/other.html) and linked from the
  set.mm README; a lecture-length introduction to the database.
- [How Metamath Proofs Work](https://us.metamath.org/mpeuni/mmset.html#proofs)
  — read before the lab.
- [set.mm contributions visualized with Gource](https://www.youtube.com/watch?v=XC1g8FmFcUU)
  — the contribution history through 2019-10-04, drawn as an animation.
