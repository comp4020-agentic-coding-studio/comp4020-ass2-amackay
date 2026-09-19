---
title: mmj2 in depth
description:
  How mmj2 unifies a step, what a work variable is for, and how to grow a proof
  worksheet one step at a time until a theorem that needs several steps
  verifies.
week: 5
date: 2027-03-24
teachers:
  - teodor-ashby
related:
  - lectures/week-05
  - assessments/lab-proofs
  - assessments/verifier-project
spec:
  - your proof of this week's assigned theorem, which needs several essential
    steps, verifies in mmj2 with no errors
  - the worksheet you submit has no work variables left in it
  - for one step of your proof you can show which earlier steps its
    hypotheses unified with, and what was substituted for each variable
links:
  - label: mmj2 README
    url: https://github.com/digama0/mmj2/blob/master/README.md
  - label: mmj2 Batch Command Documentation
    url: https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html
  - label: "Video: Walkthrough of the tutorial in mmj2"
    url: https://www.youtube.com/watch?v=87mnU1ckbI0
  - label: "Metamath: A Computer Language for Mathematical Proofs"
    url: https://us.metamath.org/downloads/metamath.pdf
---

## Before the lab

Bring the mmj2 and set.mm setup from last week. Watch
[Walkthrough of the tutorial in mmj2](https://www.youtube.com/watch?v=87mnU1ckbI0)
and, in the
[Batch Command Documentation](https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html),
read the entries `DeclareWorkVars` and `DefineWorkVarType`.

## In the lab

Unification first. The
[Metamath book](https://us.metamath.org/downloads/metamath.pdf) defines it as
"an algorithm for determining what substitutions to variables have to be made
to make two expressions match each other". The
[Batch Command Documentation](https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html)
describes a worksheet as the theorem's "logical hypotheses and "qed" step"
plus derivation steps, and calls a proof "unified" when its steps have "Ref
labels" — the name of the statement each step applies. The first twenty
minutes are spent unifying single steps and reading what mmj2 wrote back.

Work variables next. When you know which statement a step applies but not
yet what one of its variables should be, a work variable stands in for the
unknown. The documentation says a default set is created "when first need
arises (e.g. at Proof Assistant start-up)", one prefix per type code. A
finished proof has none left: each has been replaced by
the expression later steps forced.

The last hour is the assigned theorem, which needs several steps. Start from
the conclusion, add the step you think comes just before it, unify, and keep
going until every step is justified and mmj2 reports no errors.

## Afterwards

Save the worksheet and submit it as the lab proofs page says. The proof in it
is what a verifier reads: the
[README](https://github.com/digama0/mmj2/blob/master/README.md) notes
that "Once you complete a proof, you have to use another tool (like a text
editor) to put the proof into database", and the batch command `VerifyProof`
with `*` checks every proof in a loaded file. Your verifier, set on Monday,
should agree with mmj2 on the proofs you write here.
