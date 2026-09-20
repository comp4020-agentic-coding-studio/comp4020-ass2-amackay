---
title: The verifier project
description: >-
  Write your own Metamath verifier, in a language of your choice, and have it
  marked against a test suite the course provides. Set in week 5, due at the
  end of week 12; full details to follow.
week: 5
due: 2027-05-28T12:00:00+10:00
weight: 50
marking:
  mode: holistic
  description: >-
    Marked against a test suite the course provides, with bonus marks for
    features beyond the core. The suite and the marking scheme are published
    when the project is set in week 5.
spec:
  - a verifier written by you, in a language other than C, C++, Rust, Java or Python, that reads a Metamath database and reports whether every proof in it is correct
  - it passes the core tests of the suite the course provides
  - it is shown running at the week 8 lab check-in, against the tests the check-in names
  - a short report on how you tested it
links:
  - label: set.mm verifiers page
    url: https://github.com/metamath/set.mm/blob/develop/verifiers.md
  - label: The Metamath book, the language specification
    url: https://us.metamath.org/downloads/metamath.pdf
related:
  - lectures/week-05
  - sessions/08-prove-in-iset
  - sessions/12-retrospective
---

## The brief

> Write a program that checks Metamath proofs.

By week 5 you will have used three verifiers and read the part of the
[specification](https://us.metamath.org/downloads/metamath.pdf) that says what
they do. The project is to write your own.

Any language except C, C++, Rust, Java and Python. set.mm's
[verifiers page](https://github.com/metamath/set.mm/blob/develop/verifiers.md)
lists the five programs that check every change to it, and they are written in
exactly those five; yours goes somewhere new. You may read any source you like,
including those five.

## What you submit

A repository with the code, a way to run it on a database from the command
line, and a short report on how you tested it. The exact form is settled when
the project is set in week 5.

## How it is marked

Against a test suite the course provides: a set of databases, each with the
verdict a correct verifier gives. The core of the suite is what full marks need.
Bonus marks, capped at the project's maximum, go to features beyond the core;
the likely candidates are the compressed proof format and file inclusion, both
in the specification, distinct-variable conditions, and definition checking.
Full details to follow. The week 8 lab is a check-in, with a suggested rate of
progress: which tests a verifier on track should pass by then.
