---
title: A definition that fails
description: >-
  Add a definition to a copy of set.mm, run mmj2's definition check, watch it
  reject one, and fix it. The corrected definition starts your definition
  exercise.
week: 7
date: 2027-04-21
teachers:
  - teodor-ashby
related:
  - lectures/week-07
  - assessments/definition-exercise
spec:
  - the definition check runs on your copy of set.mm with the recommended exclusions, and you kept its report
  - your own definition, added to that copy, fails the check at least once, and you kept that report too
  - your corrected definition passes the check, and one theorem about it verifies in mmj2 with no errors
links:
  - label: "mmj2 Batch Command Documentation"
    url: https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html
  - label: "mmj2 README"
    url: https://github.com/digama0/mmj2
  - label: "Metamath Proof Explorer: Appendix 4, A Note on Definitions"
    url: https://us.metamath.org/mpeuni/mmset.html
---

## Before the lab

Have mmj2 loading set.mm as in the earlier labs, and a text editor open on a
copy of set.mm that you are willing to break. mmj2
["does *not* update Metamath .mm databases"](https://github.com/digama0/mmj2),
so every definition today goes into the file by hand.

Read [Appendix 4](https://us.metamath.org/mpeuni/mmset.html) of the Proof
Explorer home page. Bring a draft of the definition you intend to submit for
the [definition exercise](/assessments/definition-exercise/): a `$a` statement
with a `df-` label and one line saying what it abbreviates.

## In the lab

First, a clean run. Add
`RunMacro,definitionCheck,ax-*,df-bi,df-clab,df-cleq,df-clel` to your
RunParms. The
[batch documentation](https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html)
says `RunMacro` runs a macro from the `macro/` directory, that macros are on
by default, and that `definitionCheck` with these arguments replaces the
older `SetMMDefinitionsCheckWithExclusions` RunParm. Run it on the unchanged
copy and keep the output: that is what a clean report looks like.

Second, a broken one. Change `df-2` to the appendix's self-referential
`2 = ( 1 + 2 )`, run the check again, and note what changed in the report.
Teodor then hands round two definitions that are wrong in less obvious ways;
run the check on each and write one line on what it objects to.

Third, yours. Restore `df-2`, add your own definition, and run the check.
Fix it until the report is clean, then prove one small theorem from it in
mmj2, in the usual way: a worksheet that unfolds the definition once.

## Afterwards

The passing definition, its theorem, and the clean report are the first
part of your [definition exercise](/assessments/definition-exercise/)
submission. Keep the failing reports too: they go in with one line each on
what the check found and what you changed.
