---
title: The verifier project
description:
  Write your own Metamath verifier, in any language, from the specification.
  Set in week 5, a milestone in week 8, due at the end of week 12.
week: 5
due: 2027-05-28T12:00:00+10:00
weight: 50
marking:
  mode: weighted
  criteria:
    - name: Passes the public conformance suite
      weight: 40
    - name: Verifies set.mm
      weight: 20
    - name: Week 8 milestone on peano.mm
      weight: 10
    - name: Code a reader can follow, and the report
      weight: 30
spec:
  - a verifier written by you, in a language of your choice, that reads a Metamath database and reports whether every proof in it is correct
  - it accepts every conforming file and rejects every non-conforming file in the public conformance suite the course names
  - it verifies the copy of set.mm you fetched in week 1, and the report says how long that took on your machine
  - by the week 8 lab it verifies peano.mm, demonstrated in the lab
  - a report of no more than 1500 words on what the specification left you to decide and how you tested it
links:
  - label: The Metamath book, the language specification
    url: https://us.metamath.org/downloads/metamath.pdf
  - label: The conformance suite
    url: https://github.com/david-a-wheeler/metamath-test
related:
  - lectures/week-05
  - sessions/08-prove-in-iset
  - sessions/12-retrospective
---

## The brief

> Write a program that checks Metamath proofs, and check set.mm with it.

By week 5 you have used three verifiers and read the part of the specification
that says what they do. The project is to write a fourth. The language has few
rules, and most first attempts still accept a wrong proof somewhere. Finding
where is the work.

The rules: your own code, in any language, written from the
[specification](https://us.metamath.org/downloads/metamath.pdf) and the
[conformance suite](https://github.com/david-a-wheeler/metamath-test), without
reading the source of an existing verifier. Libraries for reading files and
handling strings are fine; a library that parses Metamath is not.

## What you submit

A repository with the code, a way to run it on a database from the command
line, and the report. The week 8 milestone is shown in the lab, not
submitted: run your verifier on peano.mm in front of the tutor.

## How it is marked

The conformance suite decides the first criterion by itself: each file in it
either is or is not a valid database, and your verifier either agrees or does
not. set.mm decides the second: a verifier that accepts it, in any amount of
time, meets the criterion, and the report says the time. The milestone is
marked in the room in week 8. The last criterion is a person reading your
code and your report, and asking whether someone who had not written it could
find where each rule of the language is enforced.
