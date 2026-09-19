---
title: Verify a machine-found proof by hand
description:
  Take a short propositional proof found by exhaustive search, check every step
  on paper, then check it in mmj2 and with mmverify.py. The last lab that counts
  toward lab proofs.
week: 11
date: 2027-05-19
teachers:
  - teodor-ashby
related:
  - lectures/week-11
  - assessments/lab-proofs
spec:
  - your hand check lists every step of the chosen proof with the axiom it applies and the statement it produces, ending in the file's "Result of proof"
  - the same proof, entered in mmj2 in a database whose only axioms are ax-1, ax-2, ax-3 and ax-mp, verifies with no errors
  - mmverify.py run on that database reports no errors
links:
  - label: Shortest known proofs of the Principia propositional theorems
    url: https://us.metamath.org/mmsolitaire/pmproofs.txt
  - label: mmverify.py
    url: https://us.metamath.org/downloads/mmverify.py
  - label: mmj2
    url: https://github.com/digama0/mmj2
  - label: Overview of Metamath (IHP 2014 slides)
    url: https://us.metamath.org/downloads/ihp2014mm.pdf
---

## Before the lab

Read the header of
[pmproofs.txt](https://us.metamath.org/mmsolitaire/pmproofs.txt). It holds
proofs of "all 193 theorems of propositional calculus in Whitehead and
Russell's _Principia Mathematica_" from ax-1, ax-2, ax-3 and ax-mp; its
revision history names who found each shorter proof and with what program, and
says "Proofs of up to 39 steps have been searched exhaustively". Learn its
notation: "1" is ax-1, "2" is ax-2, "3" is ax-3, "D" is ax-mp, and the header's
own example is *1.6 with the proof `DD2D121`. Pick a theorem whose proof is at
most nine characters long and bring its line.

## In the lab

Forty-five minutes on paper. Read your proof string from the right: each digit
puts an axiom on a stack, each D takes the top two off and applies modus
ponens. Write the substitution and the resulting statement at every step. Your
last line must match the "Result of proof" in the file.

Forty-five minutes in [mmj2](https://github.com/digama0/mmj2). Make a small
database with the four axioms copied from set.mm (ax-1, ax-2 and ax-mp are
shown in Metamath syntax on slides 15 to 17 of the
[IHP 2014 overview](https://us.metamath.org/downloads/ihp2014mm.pdf)), state
your theorem as a `$p`, and enter the proof as you checked it.

Thirty minutes with a second verifier. Save the database and run
`python3 mmverify.py < yourfile.mm 2> yourfile.log`, the invocation
[mmverify.py](https://us.metamath.org/downloads/mmverify.py) gives in its own
header, and read the log. If your verifier project already runs, run it too and
compare.

## Afterwards

Submit the hand check and the database by Friday. This is the last proof that
counts toward the lab-proofs mark; marks and comments come back at the week 12
lab.
