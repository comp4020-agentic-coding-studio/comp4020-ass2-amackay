---
title: Read MM0 against Metamath
description:
  Read the Metamath Zero translation of set.mm's axioms beside the axioms
  themselves, line by line, and say what each file states that the other
  leaves out.
week: 10
date: 2027-05-12
teachers:
  - teodor-ashby
related:
  - lectures/week-10
  - assessments/lab-proofs
spec:
  - for each of ax-1, ax-2, ax-3 and ax-mp in set.mm you can point to the line of set.mm0 that states it
  - your half-page names two differences between the two files, each with a line from each file beside it
  - your week 10 lab proof verifies in mmj2 with no errors and is submitted by Friday
links:
  - label: Metamath Zero repository
    url: https://github.com/digama0/mm0
  - label: set.mm repository
    url: https://github.com/metamath/set.mm
  - label: mmj2
    url: https://github.com/digama0/mmj2
---

## Before the lab

Read the Introduction of the
[Metamath Zero README](https://github.com/digama0/mm0). In the same repository,
open `examples/set.mm0`, which the README calls "a hand-translation of the axiom
system of set.mm into MM0", and keep it in one window; in the other, open the
propositional-calculus axioms ax-1, ax-2, ax-3 and ax-mp near the top of
[set.mm](https://github.com/metamath/set.mm). You need nothing installed for
the reading; you need mmj2 for the last part, as in every proving lab.

## In the lab

The first 45 minutes are pair reading. For each of the four axioms, find the
statement in set.mm0 that plays its role, and note what Metamath declares with
`$c`, `$v` and `$f` and what set.mm0 does instead. Then, alone, write half a
page: two differences between the files that the README itself states, for
example that MM0 keeps expressions as trees where Metamath keeps strings, or
that definitions in Metamath "are just axioms", each with one line quoted from
each file beside it. The last 45 minutes are for your week 10 lab proof in
[mmj2](https://github.com/digama0/mmj2), set at the start of the lab.

If you have `mm0-hs` installed, `mm0-hs from-mm` translates a Metamath file to
MM0; the README marks that toolchain "Deprecated, but contains most of the
translations", so treat the result as a second reading, not a reference.

## Afterwards

Submit the half-page and the lab proof by Friday. The proof counts toward the
lab-proofs mark; the half-page does not, and is returned with comments at the
next lab.
