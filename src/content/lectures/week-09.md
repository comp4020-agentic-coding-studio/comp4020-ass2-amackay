---
title: Formalisation in practice
description: >-
  What large Metamath proofs cost, from the ones that exist: GCH implies AC,
  the prime number theorem, Bertrand's postulate, a proof done on video,
  legibility research, and the 100 theorems scoreboard.
week: 9
date: 2027-05-03
teachers:
  - noor-castellane
related:
  - sessions/09-a-longer-proof
  - assessments/lab-proofs
links:
  - label: "Other Metamath-Related Topics"
    url: https://us.metamath.org/other.html
  - label: "GCH implies AC, a Metamath Formalization"
    url: https://doi.org/10.48550/arxiv.1506.03533
  - label: "CICM 2015"
    url: http://www.cicm-conference.org/2015/
  - label: "Formalization of the prime number theorem and Dirichlet's theorem"
    url: https://doi.org/10.48550/arxiv.1608.02029
  - label: "CICM 2016"
    url: http://www.cicm-conference.org/2016/
  - label: "Arithmetic in Metamath, Case Study: Bertrand's Postulate"
    url: http://arxiv.org/abs/1503.02349
  - label: "Formalizing Geometric Proof Schwabhäuser 4.6 in the Metamath Proof Explorer"
    url: https://youtu.be/3R27Qx69jHc
  - label: "Optimising Metamath Proofs for Human Working Memory"
    url: https://doi.org/10.48550/arxiv.2609.07097
  - label: "A Method for Adapting Granularity of Mathematical Proofs using Metamath"
    url: https://doi.org/10.1109/laclo54177.2021.00051
  - label: "Formalizing 100 Theorems"
    url: https://www.cs.ru.nl/~freek/100/
  - label: "Metamath 100"
    url: https://us.metamath.org/mm_100.html
  - label: "Metamath 100 at set.mm commit 2c1dffe"
    url: https://github.com/metamath/set.mm/blob/2c1dffe/mm_100.html
---

Three of the largest formalisations in set.mm are by one author, and the
record of each says what it cost.

**GCH implies AC.** Mario Carneiro presented "GCH implies AC, a Metamath
Formalization" at [CICM 2015](http://www.cicm-conference.org/2015/);
metamath.org's [other topics page](https://us.metamath.org/other.html) links
the video, slides and paper. The
[paper's](https://doi.org/10.48550/arxiv.1506.03533) abstract, as OpenAlex
records it, describes Specker's "local" version of the claim "with particular
attention to some extra complications which were glossed over in the original
informal proof." That is the recurring lesson: an informal proof glosses, and
a formal one cannot.

**The prime number theorem.** The
[Metamath 100 page](https://github.com/metamath/set.mm/blob/2c1dffe/mm_100.html),
at set.mm commit 2c1dffe, dates `pnt` to 2016-06-01 and Dirichlet's theorem
`dirith` to 2016-05-12, both by Mario Carneiro. The
[CICM 2016](http://www.cicm-conference.org/2016/) talk and the
[paper](https://doi.org/10.48550/arxiv.1608.02029) cover both: Selberg's
elementary proof of the prime number theorem, "within the proof system
Metamath."

**Bertrand's postulate.** `bpos` is in set.mm, by Mario Carneiro, 2014-03-15,
per the [same page](https://github.com/metamath/set.mm/blob/2c1dffe/mm_100.html),
which also records the iset.mm version, added by Jim Kingdon on 2026-09-10:
last week's lab at full scale. A CICM 2015 paper,
["Arithmetic in Metamath, Case Study: Bertrand's Postulate"](http://arxiv.org/abs/1503.02349),
is listed on [metamath.org](https://us.metamath.org/other.html) beside the
GCH talk.

**A proof on camera.**
["Formalizing Geometric Proof Schwabhäuser 4.6 in the Metamath Proof Explorer"](https://youtu.be/3R27Qx69jHc)
(19-Jul-2020) is among David A. Wheeler's videos listed on
[metamath.org](https://us.metamath.org/other.html).

**Legibility as a research question.**
[Lindsay, Kaliszyk and Rizkallah (2026)](https://doi.org/10.48550/arxiv.2609.07097)
argue, in the abstract as OpenAlex records it, that Metamath's "verification
architecture prioritises algorithmic efficiency over human readability," and
that reordering inferences can cut a reader's working memory load without
changing proof size.
[Oliveira and Pimentel (2021)](https://doi.org/10.1109/laclo54177.2021.00051)
propose adapting the level of detail at which a proof is shown, using
Metamath's step-level structure.

**The scoreboard.**
[Formalizing 100 Theorems](https://www.cs.ru.nl/~freek/100/) (last modified
2026-09-06) puts Metamath at 74 of the hundred, behind HOL Light (95),
Isabelle (92), Lean (83) and Rocq (80).
[Metamath 100](https://us.metamath.org/mm_100.html), at commit
[2c1dffe](https://github.com/metamath/set.mm/blob/2c1dffe/mm_100.html),
says "Currently there are **75** proofs proven by Metamath from this list of
100," with its comparison dated 2026-04-28. Its to-do list includes Gödel's
incompleteness theorem and Fermat's last theorem.

## Read

- [Metamath 100](https://us.metamath.org/mm_100.html): every proof on the
  list with its label, author and date; skim for how big proofs are named.
- [Formalization of the prime number theorem and Dirichlet's theorem](https://doi.org/10.48550/arxiv.1608.02029):
  the account of the largest of the three.
- [Optimising Metamath Proofs for Human Working Memory](https://doi.org/10.48550/arxiv.2609.07097):
  why the order of steps matters to a reader, which Wednesday's plan is about.
