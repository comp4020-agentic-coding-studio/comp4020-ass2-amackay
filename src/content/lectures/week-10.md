---
title: Descendants, translations and comparisons
description:
  The languages that grew out of Metamath, the programs that carry proofs into
  and out of it, and one published comparison that sets it beside sixteen other
  provers.
week: 10
date: 2027-05-10
teachers:
  - noor-castellane
related:
  - sessions/10-read-mm0
  - assessments/lab-proofs
links:
  - label: Metamath Zero repository
    url: https://github.com/digama0/mm0
  - label: "Metamath Zero: The Cartesian Theorem Prover (arXiv record)"
    url: https://doi.org/10.48550/arxiv.1910.10703
  - label: "Metamath Zero: Designing a Theorem Prover Prover (DOI)"
    url: https://doi.org/10.1007/978-3-030-53518-6_5
  - label: Trivial Metamath Zero kernel
    url: https://github.com/trivial-rs/kernel
  - label: The Seventeen Provers of the World (PDF)
    url: https://www.cs.ru.nl/~freek/comparison/comparison.pdf
  - label: Other Metamath-related topics
    url: https://us.metamath.org/other.html
  - label: Russell logical framework (mdl)
    url: https://github.com/dmitry-vlasov/russell
  - label: Conversion of HOL Light proofs into Metamath (arXiv record)
    url: https://doi.org/10.48550/arxiv.1412.8091
  - label: mm2dk translator
    url: https://gitlab.com/semantiko/mm2dk/translator
  - label: AML-Lean-to-Metamath
    url: https://gitlab.com/ilds/aml-lean/AML-Lean-to-Metamath
  - label: kore2mm
    url: https://github.com/zhengyao-lin/kore2mm
  - label: Lean
    url: https://lean-lang.org/
  - label: Rocq Prover
    url: https://rocq-prover.org/
  - label: Isabelle
    url: http://www.cl.cam.ac.uk/Research/HVG/Isabelle/index.html
  - label: HOL Light
    url: http://www.cl.cam.ac.uk/~jrh13/hol-light/
  - label: Metamath home page
    url: https://us.metamath.org/index.html
---

Metamath has descendants: languages that keep its small verifier and change
something else. This lecture covers three, the programs that carry proofs into
and out of Metamath, and one published comparison. It does not rank systems.

**Metamath Zero.** Its repository calls it "a language for writing
specifications and proofs", inspired by "Metamath and Lean, two proof languages
at opposite ends of a spectrum" ([digama0/mm0](https://github.com/digama0/mm0)).
It separates specification from proof, adds Metamath One, a language in which
proofs are written and compiled, and states the goal: "to build a formally
verified (in MM0) verifier for MM0, down to the hardware". The 2019 paper, as
[its arXiv record](https://doi.org/10.48550/arxiv.1910.10703)
describes it, "aims for simplicity of logic and implementation, without
compromising on efficiency of verification"; the 2020 paper is indexed at
[its DOI](https://doi.org/10.1007/978-3-030-53518-6_5) without an abstract. The
[Trivial kernel](https://github.com/trivial-rs/kernel) checks MM0's binary proof
format.

**Ghilbert and JHilbert.** In Wiedijk's survey, Megill describes Ghilbert as
Raph Levien's language "that has its roots in Metamath but guarantees the
soundness of definitions"
([PDF, p. 104](https://www.cs.ru.nl/~freek/comparison/comparison.pdf)). The
Metamath site lists its verifier gh_verify, and JHilbert, "written in Java by
Alexander Klauer" ([other.html](https://us.metamath.org/other.html)).

**Russell.** Its mdl program is "a compiler from a relativily high-level
language for the representation of formal mathematics to the simple and robust
for checking language Metamath"
([dmitry-vlasov/russell](https://github.com/dmitry-vlasov/russell)); the
Metamath site dates its download 10-Apr-2013
([other.html](https://us.metamath.org/other.html)).

**Translations.** Carneiro's 2014 paper, as
[its arXiv record](https://doi.org/10.48550/arxiv.1412.8091) describes it,
converts proofs from OpenTheory, an exchange format for "the HOL family of proof
languages", into Metamath: first into hol.mm, then into set.mm. Outward,
`mm0-hs from-mm` translates Metamath to MM0
([digama0/mm0](https://github.com/digama0/mm0));
[mm2dk](https://gitlab.com/semantiko/mm2dk/translator) translates Metamath to
Dedukti. Two matching-logic projects,
[AML-Lean-to-Metamath](https://gitlab.com/ilds/aml-lean/AML-Lean-to-Metamath)
and [kore2mm](https://github.com/zhengyao-lin/kore2mm), export into Metamath
from Lean and from Kore.

**Comparison.** [The Seventeen Provers of the World](https://www.cs.ru.nl/~freek/comparison/comparison.pdf)
shows one proof, the irrationality of the square root of 2, in seventeen
systems; Metamath's entry (pp. 103–105) is by Megill:
"It is a proof verifier, not an automated prover". Five neighbours, each in its
own words: [Lean](https://lean-lang.org/), "an open-source programming language
and proof assistant"; the [Rocq Prover](https://rocq-prover.org/), "formerly
known as the Coq Proof Assistant";
[Isabelle](http://www.cl.cam.ac.uk/Research/HVG/Isabelle/index.html), "a
generic proof assistant"; [HOL Light](http://www.cl.cam.ac.uk/~jrh13/hol-light/),
for "higher order logic"; and Mizar, which the
[Metamath home page](https://us.metamath.org/index.html) says mimics published
proofs, "whereas Metamath shows you every detail".

## Read

- [Metamath Zero README](https://github.com/digama0/mm0) — what MM0 keeps from Metamath and what it changes.
- [The Seventeen Provers of the World, pp. 103–105](https://www.cs.ru.nl/~freek/comparison/comparison.pdf) — Metamath in its author's words.
