---
title: Prove in iset.mm
description: >-
  The same theorem proved against set.mm and then iset.mm, to see where a
  classical proof needs excluded middle. Then the verifier milestone: your
  verifier accepts peano.mm.
week: 8
date: 2027-04-28
teachers:
  - teodor-ashby
related:
  - lectures/week-08
  - assessments/lab-proofs
  - assessments/verifier-project
  - assessments/definition-exercise
spec:
  - your proof of the chosen theorem verifies in mmj2 against set.mm with no errors
  - the same statement verifies against iset.mm, or you have named the step that needs excluded middle and the closest iset.mm replacement from the cross reference
  - your verifier accepts peano.mm and reports the same result as `verify proof *` in metamath.exe on the same file
links:
  - label: "Intuitionistic Logic Explorer"
    url: https://us.metamath.org/ileuni/mmil.html
  - label: "metamath-exe README"
    url: https://github.com/metamath/metamath-exe
  - label: "iset.mm"
    url: https://us.metamath.org/metamath/iset.mm
  - label: "peano.mm"
    url: https://us.metamath.org/metamath/peano.mm
  - label: "Metamath book"
    url: https://us.metamath.org/downloads/metamath.pdf
  - label: "mmj2 Batch Command Documentation"
    url: https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html
---

## Before the lab

Download [iset.mm](https://us.metamath.org/metamath/iset.mm); the
[metamath-exe README](https://github.com/metamath/metamath-exe) points there
or to the metamath/set.mm repository.
Download [peano.mm](https://us.metamath.org/metamath/peano.mm) too. Bring your
verifier as it stands, and read "How to intuitionize classical proofs" on the
[Intuitionistic Logic Explorer](https://us.metamath.org/ileuni/mmil.html)
home page. The [definition exercise](/assessments/definition-exercise/) is
due this week; submit it before the lab if you have not.

## In the lab

The first hour is one theorem, twice. Choose a propositional theorem from
your earlier lab proofs and prove it in mmj2 against set.mm. Then start mmj2
with the `LoadFile` RunParm naming iset.mm (the
[batch documentation](https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html)
takes a filename there) and prove the same statement again. For some
theorems it goes through unchanged.

Then take one from the home page's cross reference of set.mm theorems that
iset.mm lacks. `notnotr`, double negation elimination, is a good first
choice; the page's note is that "Double negation introduction holds but not
double negation elimination." Try it, and when it does not go, use the page's
rules of thumb: case elimination with `pm2.61` splits into two theorems
unless the proposition is decidable, and "Some things just won't have
intuitionistic proofs." Write down which step needed excluded middle and
what the table offers instead.

The second hour is the [verifier milestone](/assessments/verifier-project/).
Run your verifier on peano.mm, then run metamath.exe on the same file with
`verify proof *`, which the
[Metamath book](https://us.metamath.org/downloads/metamath.pdf) says "will
report any proofs that are incorrect." The two must agree. Teodor checks
each pair in turn.

## Afterwards

The milestone is recorded against the verifier project. The proof that went
through in either database counts as this week's
[lab proof](/assessments/lab-proofs/), with your note on where the classical
one needed excluded middle attached.
