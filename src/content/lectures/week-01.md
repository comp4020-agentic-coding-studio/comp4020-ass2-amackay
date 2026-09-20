---
title: What Metamath is, and where it lives
description: "Metamath in the project's own words: the language, the website and its mirrors, the licence, the GitHub organisation, and three unrelated projects that share the name."
week: 1
date: 2027-02-22
teachers:
  - noor-castellane
slides: /decks/week-01/
related:
  - sessions/01-install-and-verify
links:
  - label: Metamath Home Page
    url: https://us.metamath.org/index.html
  - label: Metamath Site Selection (mirrors)
    url: https://us.metamath.org/mm.html
  - label: How to set up a mirror (mirror.txt)
    url: https://us.metamath.org/mirror.txt
  - label: Copyright Terms
    url: https://us.metamath.org/copyright.html
  - label: metamath on GitHub
    url: https://github.com/metamath
  - label: mmj2 on GitHub
    url: https://github.com/digama0/mmj2
  - label: Metamath on Wikipedia
    url: https://en.wikipedia.org/wiki/Metamath
  - label: "MetaMath: Bootstrap Your Own Mathematical Questions (arXiv)"
    url: https://doi.org/10.48550/arxiv.2309.12284
  - label: OpenAlex record W4386978002 (MetaMathQA)
    url: https://openalex.org/W4386978002
  - label: OpenAlex record W2955268382 (Tempus project)
    url: https://openalex.org/W2955268382
  - label: OpenAlex record W7160684602 (primary-school instrument)
    url: https://openalex.org/W7160684602
---

The project describes itself in one sentence: "Metamath is a simple and flexible computer-processable language that supports rigorously verifying, archiving, and presenting mathematical proofs" ([Metamath Home Page](https://us.metamath.org/index.html)). Everything in this course sits inside it. A *database* is a text file of axioms, theorems and proofs; a *verifier* checks every proof step in it. The name, the same page says, means "metavariable math", and is not the branch of mathematics called metamathematics.

The website is served from two mirrors, `us.metamath.org` in the United States and `cn.metamath.org` in China, and the site asks that permanent links use the US one ([Site Selection](https://us.metamath.org/mm.html)). The instructions for running a mirror are a short text file, and amount to a nightly rsync from the primary ([mirror.txt](https://us.metamath.org/mirror.txt)).

The databases are public domain under CC0, with one exception, `peano.mm`, which is under the GNU GPL; the software on the site is GPL version 2 or later unless a file says otherwise ([Copyright Terms](https://us.metamath.org/copyright.html)). The same page dates the name's public use from 1994.

Source code and databases live on GitHub. The `metamath` organisation holds the `set.mm` database, the `metamath-exe` program, the source of the Metamath book and the website sources ([Home Page, "How can I contribute?"](https://us.metamath.org/index.html)), but not everything: mmj2, the proof assistant used in this course's labs, lives under a contributor's own account at [github.com/digama0/mmj2](https://github.com/digama0/mmj2).

The [Wikipedia article](https://en.wikipedia.org/wiki/Metamath) opens with a different sentence: "a formal language and an associated computer program (a proof assistant) for archiving and verifying mathematical proofs", and it counts at least 19 verifiers for the format; week 3 returns to that count.

Three other things are called Metamath and are not this; a search for the course subject turns up all of them.

- A 2023 machine-learning paper on fine-tuning language models for mathematics, whose dataset is MetaMathQA ([arXiv](https://doi.org/10.48550/arxiv.2309.12284), as indexed by [OpenAlex](https://openalex.org/W4386978002)).
- A 2014 Russian-language article on a Tempus-programme project of that name in mathematics education ([OpenAlex record](https://openalex.org/W2955268382)).
- A 2026 paper titled "METAMATH: an ecological and innovating tool to assess mathematical metacognition in primary school" ([OpenAlex record](https://openalex.org/W7160684602)).

## Read

- [Metamath Home Page](https://us.metamath.org/index.html): the Mini FAQ, from "What is Metamath?" to "Why is it called Metamath?". Twenty minutes; the vocabulary for the whole course.
- [Copyright Terms](https://us.metamath.org/copyright.html): short, and it tells you what you may do with what you download in Wednesday's lab.
- [Metamath on Wikipedia](https://en.wikipedia.org/wiki/Metamath): a second description of the same thing, written by outsiders.
