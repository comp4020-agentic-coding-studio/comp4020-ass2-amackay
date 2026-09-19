---
title: Other databases
description: >-
  The Metamath databases beside set.mm: intuitionistic logic, higher-order
  logic, New Foundations, quantum logic, Peano arithmetic, the MIU system,
  Laws of Form, and the third-party ones on GitHub.
week: 8
date: 2027-04-26
teachers:
  - noor-castellane
related:
  - sessions/08-prove-in-iset
  - assessments/definition-exercise
  - assessments/verifier-project
links:
  - label: "How are the databases verified? (set.mm)"
    url: https://github.com/metamath/set.mm/blob/develop/verifiers.md
  - label: "metamath/set.mm repository"
    url: https://github.com/metamath/set.mm
  - label: "Intuitionistic Logic Explorer"
    url: https://us.metamath.org/ileuni/mmil.html
  - label: "Higher-Order Logic Explorer"
    url: https://us.metamath.org/holuni/mmhol.html
  - label: "New Foundations Explorer"
    url: https://us.metamath.org/nfeuni/mmnf.html
  - label: "Quantum Logic Explorer"
    url: https://us.metamath.org/qleuni/mmql.html
  - label: "Other Metamath-Related Topics"
    url: https://us.metamath.org/other.html
  - label: "peano.mm"
    url: https://us.metamath.org/metamath/peano.mm
  - label: "miu.mm"
    url: https://us.metamath.org/metamath/miu.mm
  - label: "Laws of Form in Metamath"
    url: http://naipmoro.github.io/lofmm/
  - label: "sctfn/metamath-nf"
    url: https://github.com/sctfn/metamath-nf
  - label: "digama0/dtt.mm"
    url: https://github.com/digama0/dtt.mm
  - label: "tirix/q0.mm"
    url: https://github.com/tirix/q0.mm
  - label: "Sylvain78/bourbaki_in_metamath"
    url: https://github.com/Sylvain78/bourbaki_in_metamath
---

set.mm is one database among many. The set.mm repository's
[page on verification](https://github.com/metamath/set.mm/blob/develop/verifiers.md)
calls set.mm and iset.mm "the primary databases under active development" and
says "All other databases' proofs are verified by one verifier
(metamath.exe)."

## The explorers on metamath.org

**iset.mm**, the
[Intuitionistic Logic Explorer](https://us.metamath.org/ileuni/mmil.html),
lives in the [same repository](https://github.com/metamath/set.mm) as set.mm.
Intuitionistic logic is constructive: "we must build and exhibit concrete
examples of objects before we can accept their existence," and the law of
excluded middle, (φ ∨ ¬ φ), "doesn't always hold." There is no double
negation elimination either. iset.mm "adds (or substitutes) intuitionistic
axioms for a number of the classical logical axioms of set.mm," dropping
set.mm's `ax-3`. Its home page keeps a cross reference of set.mm theorems
that iset.mm lacks, with the closest replacements; Wednesday's lab works
from that table.

**hol.mm**, the
[Higher-Order Logic Explorer](https://us.metamath.org/holuni/mmhol.html):
"an alternative approach to predicate logic that is distinguished from
first-order logic by additional quantifiers and a stronger semantics. It is
also called simple type theory."

**nf.mm**, the
[New Foundations Explorer](https://us.metamath.org/nfeuni/mmnf.html), created
by Scott Fenton: "an alternative set theory to the Zermelo-Fraenkel set theory
presented in the regular Metamath Proof Explorer," descended from the set
theory of Principia Mathematica.

**ql.mm**, the
[Quantum Logic Explorer](https://us.metamath.org/qleuni/mmql.html): three
sets of axioms, "the ortholattice axioms, the orthomodular law ... and
stronger axioms," for a logic the page says nobody knows to be decidable.

## Smaller files

metamath.org's [other topics page](https://us.metamath.org/other.html) lists
Robert Solovay's [peano.mm](https://us.metamath.org/metamath/peano.mm), Peano
arithmetic; and
[miu.mm](https://us.metamath.org/metamath/miu.mm), Hofstadter's MIU-system,
alongside big-unifier.mm and demo0.mm. The same page lists Naip Moro's
[Laws of Form database](http://naipmoro.github.io/lofmm/), derivations of G.
Spencer-Brown's boundary algebra, which its own page calls "a non-trivial
example of a system that requires, indeed is based on, the empty
substitution."

## Third-party databases on GitHub

Each described by its README:
[sctfn/metamath-nf](https://github.com/sctfn/metamath-nf), "New Foundations
set theory developed in metamath";
[digama0/dtt.mm](https://github.com/digama0/dtt.mm), "Metamath database for
dependent type theory";
[tirix/q0.mm](https://github.com/tirix/q0.mm), "A Metamath library for the Q0
logic"; and
[Sylvain78/bourbaki_in_metamath](https://github.com/Sylvain78/bourbaki_in_metamath),
"Bourbaki coded in metamath."

The [definition exercise](/assessments/definition-exercise/) is due this week.

## Read

- [Intuitionistic Logic Explorer](https://us.metamath.org/ileuni/mmil.html),
  the sections "Overview of this work" and "How to intuitionize classical
  proofs": what you need before Wednesday.
- [How are the databases verified?](https://github.com/metamath/set.mm/blob/develop/verifiers.md):
  which databases get five verifiers and which get one.
- [Laws of Form in Metamath](http://naipmoro.github.io/lofmm/): a whole
  system built on the empty substitution, in a few pages.
