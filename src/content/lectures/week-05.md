---
title: Proof assistants
description:
  The tools a student proves with — mmj2, metamath-lamp, Yamma, mmt1,
  metamath-exe's own assistant — and how they differ from the verifier you will
  write.
week: 5
date: 2027-03-22
teachers:
  - noor-castellane
related:
  - sessions/05-mmj2-in-depth
  - assessments/verifier-project
  - assessments/lab-proofs
links:
  - label: Metamath home page (FAQ)
    url: https://us.metamath.org/index.html
  - label: Other Metamath-related topics
    url: https://us.metamath.org/other.html
  - label: mmj2 repository
    url: https://github.com/digama0/mmj2
  - label: mmj2 README
    url: https://github.com/digama0/mmj2/blob/master/README.md
  - label: mmj2 Batch Command Documentation
    url: https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html
  - label: "Video: Introduction to Metamath & mmj2"
    url: https://www.youtube.com/watch?v=Rst2hZpWUbU
  - label: "Video: Walkthrough of the tutorial in mmj2"
    url: https://www.youtube.com/watch?v=87mnU1ckbI0
  - label: metamath-lamp
    url: https://expln.github.io/lamp/latest/index.html
  - label: metamath-lamp README
    url: https://github.com/expln/metamath-lamp/blob/develop/README.md
  - label: Metamath-lamp Guide
    url: https://github.com/metamath/lamp-guide
  - label: Yamma
    url: https://github.com/glacode/yamma
  - label: mmt1
    url: https://github.com/marloBruder/mmt1
  - label: metamath-exe
    url: https://github.com/metamath/metamath-exe
  - label: eimm
    url: https://us.metamath.org/downloads/eimm.zip
  - label: MM Tool
    url: http://mm.ivank.net/
  - label: Igor
    url: https://github.com/Drahflow/Igor
  - label: Milpgame
    url: https://us.metamath.org/other/milpgame/milpgame.html
---

A proof assistant helps you build a proof; a verifier only checks one. The
Metamath [home page](https://us.metamath.org/index.html) draws the line: "Proof
assistants help you interactively create proofs", while "Metamath verifiers do
not make logical inferences; they just verify that the proof as stated is
correct." This week sets the verifier project: what you write will read the
proofs these tools produce.

**mmj2** is the assistant the labs use. Its
[README](https://github.com/digama0/mmj2/blob/master/README.md) says
it "includes a GUI for creating proofs, proof verification tools, and
grammatical/syntax analysis", that it "was originally developed by Mel O'Cat
2005-2011" and since "modified by Mario Carneiro and David A. Wheeler", and
that it needs Java. Its commands are in the
[Batch Command Documentation](https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html):
`LoadFile` reads a database, `Parse` and `VerifyProof` check it, and
`RunProofAsstGUI` opens the assistant. David A. Wheeler's videos
[Introduction to Metamath & mmj2](https://www.youtube.com/watch?v=Rst2hZpWUbU)
(2014) and
[Walkthrough of the tutorial in mmj2](https://www.youtube.com/watch?v=87mnU1ckbI0)
(2020) are listed on the site's
[other topics page](https://us.metamath.org/other.html).

**metamath-lamp**, by Igor Ieskov, runs in the browser: its
[README](https://github.com/expln/metamath-lamp/blob/develop/README.md)
says "users can use this proof assistant without installing anything". The
[Metamath-lamp Guide](https://github.com/metamath/lamp-guide) "was primarily
authored by David A. Wheeler". **Yamma** is "A language server for .mmp files
(metamath proof files)" inside Visual Studio Code, with unification and quick
fixes for "missing disjoint vars statements"
([README](https://github.com/glacode/yamma)). **mmt1** is "a mmj2 style proof
assistant" with which "you can create not just metamath proofs, but also
entire (grammatical) metamath databases"
([README](https://github.com/marloBruder/mmt1)).

[metamath-exe](https://github.com/metamath/metamath-exe) has an assistant of
its own: "the PROVE command starts its proof assistant features; use HELP
PROVE inside metamath-exe for further documentation"
([other topics](https://us.metamath.org/other.html)). The home page describes
[eimm](https://us.metamath.org/downloads/eimm.zip) as "An experimental proof
export-import program" that "translates incomplete proofs in progress between
the Metamath program's CLI Proof Assistant and Mel O'Cat's mmj2 GUI Proof
Assistant".

Three older tools, listed on the site in 2015: [MM Tool](http://mm.ivank.net/),
"a Metamath proof verifier and editor that runs in a browser (written in
JavaScript by Ivan Kuckir)"; [Igor](https://github.com/Drahflow/Igor), "A
proof assistant for Metamath, specialized for set.mm (written in a custom
language by Drahflow; in progress)"; and
[Milpgame](https://us.metamath.org/other/milpgame/milpgame.html), which takes
a proof "either forward and backward relative to the statement to prove".

## Read

- [Introduction to Metamath & mmj2](https://www.youtube.com/watch?v=Rst2hZpWUbU)
  — watch before Wednesday's lab; it shows the worksheet you will work in.
- [mmj2 Batch Command Documentation](https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html)
  — the command file, and what `VerifyProof` does.
- [Metamath-lamp Guide](https://github.com/metamath/lamp-guide) — the
  alternative if you cannot run Java; ask the tutor first.
