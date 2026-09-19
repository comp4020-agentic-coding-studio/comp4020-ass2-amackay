---
title: Distinct variables
description:
  Prove a theorem whose proof needs a $d condition, then remove the condition
  and read the error the verifier reports.
week: 6
date: 2027-03-31
teachers:
  - teodor-ashby
related:
  - lectures/week-06
  - assessments/lab-proofs
spec:
  - your proof of this week's assigned theorem verifies in mmj2 with no
    errors and carries the $d statements it needs
  - you can show the error metamath-exe reports when one of those $d
    statements is removed, and name the step and the axiom the message cites
  - your submission says, in one sentence, which substitution the removed $d
    was forbidding
links:
  - label: "Metamath Proof Explorer: Appendix 3, Distinct Variables"
    url: https://us.metamath.org/mpeuni/mmset.html#distinct
  - label: metamath-exe README
    url: https://github.com/metamath/metamath-exe/blob/master/README.TXT
  - label: mmj2 Batch Command Documentation
    url: https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html
  - label: "Metamath: A Computer Language for Mathematical Proofs"
    url: https://us.metamath.org/downloads/metamath.pdf
---

## Before the lab

Install metamath-exe beside mmj2. Its
[README](https://github.com/metamath/metamath-exe/blob/master/README.TXT)
gives one portable executable for Windows, macOS and Linux and says "Then run
it and type "read set.mm"". Read
[Appendix 3](https://us.metamath.org/mpeuni/mmset.html#distinct) of the Proof
Explorer home page, which contains the experiment we start with.

## In the lab

First, the Explorer's own demonstration, on a copy of set.mm. Appendix 3 says
to "temporarily comment out the "$d x z $." condition for Theorem cleljustALT
in the database file set.mm", then verify the proof in metamath-exe. The error
it shows reads "There is a disjoint variable ($d) violation at proof step 25.
Assertion "ax-5" requires that variables "ph" and "x" be disjoint."  Read the
whole message: it names what was substituted for each variable, and why the
theorem being proved cannot allow it. That is the rule from the
[Metamath book](https://us.metamath.org/downloads/metamath.pdf): after a
substitution "the two expressions must have no variables in common", and every
pair of their variables "must exist in an active $d statement of the $p
statement containing the proof".

Then the assigned theorem, in mmj2. Appendix 3 notes that "the mmj2 program
will compute the necessary $d's automatically"; the
[Batch Command Documentation](https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html)
entry `ProofAsstDjVarsSoftErrors` sets whether it does. Run once with `Report`,
which will "Create missing $d statement error messages", and read them; then
with `GenerateReplacements`, the default, and compare what it adds with what
you expected. Finish the proof so it verifies with no errors.

## Afterwards

Submit the worksheet with its `$d` statements, plus the metamath-exe error text
from the first exercise and your one-sentence reading of it, as the lab proofs
page says. This is the last lab before the two-week break; week 7 sets the
definition exercise.
