---
title: Machine learning on Metamath
description:
  The papers that trained programs to find Metamath proofs, in order from 2016
  to 2025, the datasets and tools built for them, and a name collision to know
  about.
week: 11
date: 2027-05-17
teachers:
  - noor-castellane
related:
  - sessions/11-verify-by-hand
  - assessments/lab-proofs
links:
  - label: Holophrasm (arXiv record)
    url: https://doi.org/10.48550/arxiv.1608.02644
  - label: Generative Language Modeling for Automated Theorem Proving (arXiv record)
    url: https://doi.org/10.48550/arxiv.2009.03393
  - label: Learning to Prove Theorems by Learning to Generate Theorems (arXiv record)
    url: https://doi.org/10.48550/arxiv.2002.07019
  - label: HyperTree Proof Search for Neural Theorem Proving (arXiv record)
    url: https://doi.org/10.48550/arxiv.2205.11491
  - label: "REFACTOR: Learning to Extract Theorems from Proofs (arXiv record)"
    url: https://doi.org/10.48550/arxiv.2402.17032
  - label: Mathematical Knowledge Bases as Grammar-Compressed Proof Terms (arXiv record)
    url: https://doi.org/10.48550/arxiv.2505.12305
  - label: mm-atp-benchmark
    url: https://github.com/ai4reason/mm-atp-benchmark
  - label: synthetic-mm
    url: https://github.com/collin-kemper/synthetic-mm
  - label: Compass
    url: https://github.com/TheG3ntleman/Compass
  - label: "MetaMath: Bootstrap Your Own Mathematical Questions (arXiv record)"
    url: https://doi.org/10.48550/arxiv.2309.12284
---

Since 2016 a line of papers has used set.mm to train and test programs that
search for proofs. This lecture takes them in order, each as its own abstract
describes it, and stops where the abstracts stop. A held-out set, below, is the
group of theorems kept back from training.

- **Holophrasm (2016).** Daniel Whalen's system, as
  [its record](https://doi.org/10.48550/arxiv.1608.02644) describes it,
  explores partial proof trees with "a neural-network-augmented bandit
  algorithm" and "proves 14% of its test theorems from Metamath's set.mm
  module".
- **GPT-f (2020).** Polu and Sutskever present "an automated prover and proof
  assistant, GPT-f, for the Metamath formalization language"
  ([record](https://doi.org/10.48550/arxiv.2009.03393)). It "found new short
  proofs that were accepted into the main Metamath library", which the abstract
  calls "the first time a deep-learning based system has contributed proofs
  that were adopted by a formal mathematics community". Which proofs is not
  stated there.
- **MetaGen (2020).** Wang and Deng train "a neural generator that
  automatically synthesizes theorems and proofs for the purpose of training a
  theorem prover", with experiments in Metamath
  ([record](https://doi.org/10.48550/arxiv.2002.07019)).
- **HyperTree Proof Search (2022).** Lample and colleagues describe a search
  "inspired by the recent success of AlphaZero"; their record reports 65.4% of
  a held-out set of Metamath theorems against "56.5% by GPT-f", rising to 82.6%
  with online training ([record](https://doi.org/10.48550/arxiv.2205.11491)).
- **REFACTOR (2024).** Zhou and colleagues train a network to extract reusable
  theorems from proofs; applied "to the existing Metamath library, REFACTOR
  extracted 16 new theorems"
  ([record](https://doi.org/10.48550/arxiv.2402.17032)).
- **Grammar-compressed proof terms (2025).** Wernhard and Zombori take
  Metamath as their "source of human-structured proofs" and treat a knowledge
  base as "a grammar that compresses a set of gigantic proof trees"
  ([record](https://doi.org/10.48550/arxiv.2505.12305)).

Three repositories serve this work.
[mm-atp-benchmark](https://github.com/ai4reason/mm-atp-benchmark) is, per its
GitHub listing, a "Metamath ATP Benchmark created from set.mm";
[synthetic-mm](https://github.com/collin-kemper/synthetic-mm) is "a synthetic
data framework for Metamath"; [Compass](https://github.com/TheG3ntleman/Compass)
calls itself "A high performance metamath ITP to train for neural theorem
proving" and, in the next line, "Project abandoned in favour of LeanDojo and
MM0".

One name to know: "MetaMath: Bootstrap Your Own Mathematical Questions for
Large Language Models" (2023) and its dataset MetaMathQA. Its
[record](https://doi.org/10.48550/arxiv.2309.12284) describes a language model
fine-tuned on rewritten mathematical questions and scored on the GSM8K and
MATH benchmarks; nothing in that record concerns the Metamath language.

## Read

- [GPT-f abstract](https://doi.org/10.48550/arxiv.2009.03393) — the claim that machine-found proofs entered set.mm.
- [HyperTree Proof Search abstract](https://doi.org/10.48550/arxiv.2205.11491) — the numbers later work measures against.
