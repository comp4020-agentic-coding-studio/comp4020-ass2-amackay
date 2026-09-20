---
title: The definition exercise
description:
  Write a definition, break it, and explain what the definition check caught.
  Set in week 7, due at the end of week 8.
week: 7
due: 2027-04-30T17:00:00+10:00
weight: 20
marking:
  mode: weighted
  criteria:
    - name: The good definition passes the check
      weight: 40
    - name: The bad definition fails it, and you can say why
      weight: 40
    - name: The write-up
      weight: 20
spec:
  - a definition of your own that passes mmj2's definition check in the database the lab names
  - a second version of it that fails the check, submitted alongside
  - a write-up of no more than 500 words saying what the check found and what would have gone wrong without it
links:
  - label: Metamath Zero README
    url: https://github.com/digama0/mm0
  - label: set.mm verifiers page
    url: https://github.com/metamath/set.mm/blob/develop/verifiers.md
related:
  - lectures/week-07
  - sessions/07-a-definition-that-fails
---

## The brief

> Write a definition that the definition check accepts, then change it so that
> the check rejects it, and explain the difference.

In Metamath a definition is written the same way as an axiom. The Metamath
Zero project's [README](https://github.com/digama0/mm0) puts it plainly:
"Definitions are just axioms in Metamath." A verifier that checks proofs does
not tell the two apart, so a definition that says more than it should goes
unnoticed unless something else looks: set.mm's
[verifiers page](https://github.com/metamath/set.mm/blob/develop/verifiers.md)
records that "definitions are checked by mmj2". The week 7 lecture and lab are
about that check; this exercise asks you to stand on both sides of it.

## What you submit

Three files: the database fragment with your good definition, the same
fragment with the bad one, and the write-up. The lab says which database to
build on and how to run the check.

## How it is marked

The two definitions are checked by the tool, and the check's verdict is the
mark for the first two criteria: a good definition that fails, or a bad one
that passes, earns nothing for that criterion. The write-up is marked on
whether it says, in plain words, what the bad definition would have let you
prove.
