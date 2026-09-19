---
title: Retrospective
description:
  Demonstrate your verifier on peano.mm and on a file you have not seen, then
  show one proof from the semester. The last lab; the verifier project is due
  this week.
week: 12
date: 2027-05-26
teachers:
  - teodor-ashby
related:
  - lectures/week-12
  - assessments/verifier-project
spec:
  - your verifier runs in the lab on peano.mm and on the tutor's file, and gives the same pass or fail verdict as mmverify.py on each
  - you show one proof you wrote this semester and say, in a minute, what it proves and why you chose it
  - your verifier project is submitted by the time on its assessment page
links:
  - label: peano.mm
    url: https://us.metamath.org/metamath/peano.mm
  - label: Metamath home page
    url: https://us.metamath.org/index.html
  - label: mmverify.py
    url: https://us.metamath.org/downloads/mmverify.py
  - label: Metamath Google Group
    url: https://groups.google.com/g/metamath
---

## Before the lab

Your verifier project is due this week; the time is on its assessment page.
Bring it runnable on your own laptop, with
[peano.mm](https://us.metamath.org/metamath/peano.mm), which the
[home page](https://us.metamath.org/index.html) describes as Bob Solovay's
"nicely commented presentation of Peano arithmetic in the Metamath language",
already loaded once so that the first run is not the demonstration. Have
[mmverify.py](https://us.metamath.org/downloads/mmverify.py) beside it. Choose
one proof you wrote this semester, in mmj2 or as it appears in the Proof
Explorer, and be ready to show it.

## In the lab

Demonstrations run in enrolment order, six minutes each. Run your verifier on
peano.mm. Then run it on a file the tutor hands you on the day; it is small,
and it may or may not contain an error. Run
`python3 mmverify.py < file.mm 2> file.log` on the same file and read the two
verdicts side by side. Where they differ, say which you believe and why; a
verifier that disagrees with mmverify.py and can explain itself is a better
demonstration than one that agrees silently.

Then the proof: one minute on what it proves and why you chose it, with the
proof on screen.

The last twenty minutes are open. Bring the question you did not get to ask in
twelve weeks; what cannot be answered in the room goes to the
[Metamath Google Group](https://groups.google.com/g/metamath), which the home
page names as the place to ask.

## Afterwards

Nothing further is set. Lab-proof marks for week 11 are returned in the room.
The verifier project is marked against its assessment page after submission,
and the teaching period ends on Friday 28 May.
