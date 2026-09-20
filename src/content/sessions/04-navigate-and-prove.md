---
title: Navigate and prove
description:
  Find a theorem in the Proof Explorer and read its proof step by step, then
  prove a propositional theorem of your own in mmj2 with set.mm loaded.
week: 4
date: 2027-03-17
teachers:
  - teodor-ashby
related:
  - lectures/week-04
  - assessments/lab-proofs
spec:
  - you can open the assigned theorem's page in the Proof Explorer and name
    the axiom or earlier theorem each essential step applies
  - your proof of this week's assigned theorem verifies in mmj2 with no errors
  - the proof is submitted as the file mmj2 saved, before the deadline on the
    lab proofs page
links:
  - label: Theorem List (Table of Contents)
    url: https://us.metamath.org/mpeuni/mmtheorems.html
  - label: Metamath home page (FAQ)
    url: https://us.metamath.org/index.html
  - label: mmj2 README
    url: https://github.com/digama0/mmj2/blob/master/README.md
  - label: metamath/set.mm repository
    url: https://github.com/metamath/set.mm
---

## Before the lab

Have mmj2 running with set.mm loaded before you arrive: its
[README](https://github.com/digama0/mmj2/blob/master/README.md) says it
"takes a time to get started (circa 60 seconds on a slow machine loading the
large database set.mm)". If you skipped the interactive tutorial before week
3, do it now; the README says it "ought to take about an hour".

## In the lab

The first half hour is reading. Open the
[Theorem List](https://us.metamath.org/mpeuni/mmtheorems.html), find the
theorem you were assigned in section 1.2, Propositional calculus, and read its
proof table. The site's
[FAQ](https://us.metamath.org/index.html) gives the trick for reading one:
"look at the little colored numbers in the Ref column. The steps with the
largest numbers are usually the ones you want to look at first. The steps with
smaller numbers are typically logic "glue" to tie them together." For each
essential step, write down which axiom or earlier theorem it applies and what
was substituted for each variable.

The rest is proving. In mmj2, start a new proof worksheet for your second
theorem, type its statement, and build the proof step by step, unifying as you
go, until every step is justified and mmj2 reports no errors. The README warns
that "The first unification can also take several seconds"; after that it is
fast.

## Afterwards

Save the worksheet and submit it as the lab proofs page says. mmj2 "does *not*
update Metamath .mm databases", so your proof lives in the file you saved, not
in set.mm. Next week's lab stays in mmj2 and goes further into how it unifies.
