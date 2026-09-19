---
title: The axioms, and the metalogic behind $d
description:
  Where set.mm's axioms come from, why its statements are schemes rather than
  theorems, what a distinct-variable condition is, and the results and open
  problems around them.
week: 6
date: 2027-03-29
teachers:
  - noor-castellane
related:
  - sessions/06-distinct-variables
links:
  - label: Metamath Proof Explorer home page
    url: https://us.metamath.org/mpeuni/mmset.html
  - label: "Megill (1995), A Finitely Axiomatized Formalization of Predicate Calculus with Equality"
    url: http://projecteuclid.org/euclid.ndjfl/1040149359
  - label: Preprint of the 1995 paper
    url: https://us.metamath.org/downloads/finiteaxiom.pdf
  - label: "Metamath: A Computer Language for Mathematical Proofs"
    url: https://us.metamath.org/downloads/metamath.pdf
  - label: "Carneiro, Models for Metamath"
    url: https://doi.org/10.48550/arxiv.1601.07699
  - label: Shortest known proofs of the propositional calculus theorems
    url: https://us.metamath.org/mmsolitaire/pmproofs.txt
  - label: Weaker D-Complete Logics
    url: https://us.metamath.org/downloads/weakd.pdf
  - label: Workshop Miscellany
    url: https://us.metamath.org/award2003.html
  - label: Quantum Logic Explorer
    url: https://us.metamath.org/qleuni/mmql.html
  - label: Grammar ambiguity in set.mm
    url: https://us.metamath.org/downloads/grammar-ambiguity.txt
  - label: Other Metamath-related topics
    url: https://us.metamath.org/other.html
---

The axioms of set.mm are schemes. The Proof Explorer's
[note on the axioms](https://us.metamath.org/mpeuni/mmset.html#axiomnote) says
they "should be interpreted as schemes, or recipes, for generating those
axioms and theorems", and that the system "is founded on a simplified
formalization of predicate calculus with equality published by logician Alfred
Tarski in 1965". The extra schemes give it "scheme completeness (defined in
Remark 9.6 of [Megill] and called "metalogical completeness" there)": Norman
Megill's
[A Finitely Axiomatized Formalization of Predicate Calculus with Equality](http://projecteuclid.org/euclid.ndjfl/1040149359)
(1995), with a [preprint](https://us.metamath.org/downloads/finiteaxiom.pdf)
on the site.

A `$d` statement is the price of that simplicity. The
[Metamath book](https://us.metamath.org/downloads/metamath.pdf) says "$d x y
simply means that x and y must be distinct, i.e. they may not be simultaneously
substituted with the same variable. The statement $d x ϕ means variable x must
not occur in wff ϕ." The Proof Explorer's
[Appendix 3](https://us.metamath.org/mpeuni/mmset.html#distinct) adds that
these "are metalogical conditions imposed on certain axiom and theorem
schemes. They have no role in the actual logic (object language)". Wednesday's
lab removes one and watches the verifier object.

What a Metamath system means is the subject of Mario Carneiro's
[Models for Metamath](https://doi.org/10.48550/arxiv.1601.07699) (2016); its
abstract, as indexed, says it defines models for an arbitrary Metamath formal
system and uses them to show the main database consistent if ZFC has a model.

Three pages from the site's [other topics](https://us.metamath.org/other.html)
follow. Megill's
[pmproofs.txt](https://us.metamath.org/mmsolitaire/pmproofs.txt) holds "proofs
of all 193 theorems of propositional calculus in Whitehead and Russell's
_Principia Mathematica_, directly from axioms ax-1, ax-2, ax-3, and ax-mp", in
a notation "invented by logician C. A. Meredith in the 1950's", with shorter
proofs recorded as late as 2025.
[Weaker D-Complete Logics](https://us.metamath.org/downloads/weakd.pdf), by
Megill and Martin W. Bunder, is the paper on that notation's logic. Megill's
[Workshop Miscellany](https://us.metamath.org/award2003.html), begun for the
2003 Argonne workshop, lists open problems, some since solved: in 2018 Benoît
Jubin showed "the "Axiom of Twoness" is needed for completeness of the ZFC
axioms without distinct variables".

The [Quantum Logic Explorer](https://us.metamath.org/qleuni/mmql.html) runs
the same machinery on a non-classical system, its proofs "verified by the
Metamath program with the database file ql.mm". And Carneiro's
[Grammar ambiguity in set.mm](https://us.metamath.org/downloads/grammar-ambiguity.txt)
(2015) proves set.mm's syntax has one parse per formula, since "without this
constraint, the task of finding syntax proofs can become just as difficult as
finding logical proofs".

## Read

- [Appendix 3: Distinct Variables](https://us.metamath.org/mpeuni/mmset.html#distinct)
  — the worked `$d` example the lab reproduces; read it before Wednesday.
- [pmproofs.txt](https://us.metamath.org/mmsolitaire/pmproofs.txt) — read the
  header, which explains the notation, then check one proof by hand.
