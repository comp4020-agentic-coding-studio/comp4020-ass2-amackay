---
title: First proof
description: "The first proving lab: build a short propositional-logic proof in mmj2's Proof Assistant, unify it, and see the verifier accept it. This lab counts toward the lab-proof mark."
week: 3
date: 2027-03-10
teachers:
  - teodor-ashby
related:
  - lectures/week-03
  - assessments/lab-proofs
spec:
  - your worksheet for the theorem handed out at the start unifies in mmj2 with no errors
  - every step cites a hypothesis, an axiom or an earlier theorem of set.mm by label
  - the worksheet is submitted by 5pm on Friday, as the lab proofs page says
links:
  - label: mmj2 on GitHub
    url: https://github.com/digama0/mmj2
  - label: mmj2 README
    url: https://github.com/digama0/mmj2/blob/master/README.md
  - label: mmj2 RunParm reference
    url: https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html
  - label: Metamath Home Page (Downloads)
    url: https://us.metamath.org/index.html
  - label: Other Metamath-Related Topics
    url: https://us.metamath.org/other.html
  - label: "Video: Introduction to Metamath & mmj2"
    url: https://www.youtube.com/watch?v=Rst2hZpWUbU
  - label: "Video: Walkthrough of the tutorial in mmj2"
    url: https://www.youtube.com/watch?v=87mnU1ckbI0
---

You prove one short theorem of propositional logic in mmj2 and leave with a worksheet the verifier accepts. From this week to week 11, each lab's proof is marked as part of the lab-proof assessment.

## Before the lab

Do mmj2's interactive tutorial, which its [README](https://github.com/digama0/mmj2/blob/master/README.md) says takes about an hour. The [site's Other Topics page](https://us.metamath.org/other.html) lists two videos by David A. Wheeler that cover the same ground: an [introduction to Metamath and mmj2](https://www.youtube.com/watch?v=Rst2hZpWUbU) and a [walkthrough of the tutorial](https://www.youtube.com/watch?v=87mnU1ckbI0). Check that your `RunParms.txt` still loads your `set.mm`; the `LoadFile` and `RunProofAsstGUI` lines are in the [RunParm reference](https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html), and the [home page's Downloads section](https://us.metamath.org/index.html) shows a working file.

## In the lab

The theorem is handed out on paper at the start: its hypotheses, if any, and its conclusion, in set.mm's notation. Start mmj2, open the Proof Assistant, and build the proof as a worksheet, one step per line, each citing by label the hypotheses, axioms or earlier set.mm theorems it follows from. Ask mmj2 to unify; the README notes that the first unification can take several seconds and that it is quick after that. If it reports an error, fix the step and unify again. The tutor circulates; the point is not to be told the proof but to make the verifier stop objecting.

mmj2 does not write into a database. The README says that once a proof is complete you put it into a `.mm` file with another tool such as a text editor; later labs do that. Today the saved worksheet is the deliverable.

## Afterwards

Submit the worksheet file as the [lab proofs page](/assessments/lab-proofs/) says, by 5pm on Friday; most people finish in the room and submit before they leave. It is marked on whether it unifies without error and whether every step cites a real label, and the mark and a line of feedback come back before the next lab.
