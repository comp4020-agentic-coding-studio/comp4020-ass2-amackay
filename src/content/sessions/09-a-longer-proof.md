---
title: A longer proof
description: >-
  Plan a proof that needs several lemmas before typing any of it, then prove
  the lemmas in order in mmj2 and verify the whole file in metamath-exe.
week: 9
date: 2027-05-05
teachers:
  - teodor-ashby
related:
  - lectures/week-09
  - assessments/lab-proofs
spec:
  - your plan names the target theorem and every lemma as a Metamath statement, and the tutor checked it before you typed a proof
  - each lemma's proof and the final proof verify in mmj2 with no errors
  - the file holding them passes `verify proof *` in metamath-exe with no errors, and you can say which axioms the final theorem depends on
links:
  - label: "Metamath 100 at set.mm commit 2c1dffe"
    url: https://github.com/metamath/set.mm/blob/2c1dffe/mm_100.html
  - label: "mmj2 README"
    url: https://github.com/digama0/mmj2
  - label: "Metamath book"
    url: https://us.metamath.org/downloads/metamath.pdf
  - label: "Metamath Proof Explorer: Appendix 5"
    url: https://us.metamath.org/mpeuni/mmset.html
---

## Before the lab

Choose a target theorem that will not fit in one worksheet; Teodor has a
list, or bring your own and ask on Monday. Write the plan before you open
mmj2: the target as a Metamath statement, then each lemma as a Metamath
statement with its hypotheses, in the order you expect to prove them, with
the set.mm theorems you expect each to lean on. Look at how set.mm does it:
the [Metamath 100 page](https://github.com/metamath/set.mm/blob/2c1dffe/mm_100.html)
lists `pnt` with `pnt2` and `pnt3` beside it. A lemma is a statement, not a
paragraph.

## In the lab

The first twenty minutes are plans. Teodor reads each one; a lemma whose
statement is not well formed, or that quietly assumes the target, is
rewritten before anything is proved.

Then prove the lemmas in order, one worksheet each. A lemma that will not go
through is a plan problem before it is a proof problem: change the plan,
write one line on why, and carry on. Put each finished proof into your
database file with the editor as you go, since mmj2
["does *not* update Metamath .mm databases"](https://github.com/digama0/mmj2).

In the last twenty minutes, verify the file. Run `verify proof *` in
metamath-exe, which the
[Metamath book](https://us.metamath.org/downloads/metamath.pdf) recommends
doing periodically "to ensure their integrity." Then run
`show trace_back <label> /essential /axioms` on your target, the command
[Appendix 5](https://us.metamath.org/mpeuni/mmset.html) of the Proof
Explorer home page gives for listing the axioms a proof depends on. The
appendix also shows how to find where an unexpected one came in.

## Afterwards

The plan, with its changes, the database file, and the trace-back are this
week's [lab proof](/assessments/lab-proofs/) submission. The plan is read as
well as the proofs; a lemma that changed, with its line on why, counts for
it.
