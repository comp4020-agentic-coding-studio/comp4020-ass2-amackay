---
title: Verification
description: "What a verifier does, the five verifiers that check every change to set.mm and the workflow that runs them, the conformance suites, and how many more verifiers exist."
week: 3
date: 2027-03-08
teachers:
  - noor-castellane
slides: /decks/week-03/
related:
  - sessions/03-first-proof
  - assessments/lab-proofs
  - assessments/verifier-project
links:
  - label: Metamath book (PDF)
    url: https://us.metamath.org/downloads/metamath.pdf
  - label: How are the databases verified? (set.mm)
    url: https://github.com/metamath/set.mm/blob/develop/verifiers.md
  - label: set.mm CI workflow (verifiers.yml)
    url: https://github.com/metamath/set.mm/blob/develop/.github/workflows/verifiers.yml
  - label: metamath-exe on GitHub
    url: https://github.com/metamath/metamath-exe
  - label: checkmm.cpp
    url: https://us.metamath.org/downloads/checkmm.cpp
  - label: checkmm on GitHub
    url: https://github.com/EricSchmidt-119/checkmm
  - label: smetamath-rs README
    url: https://github.com/sorear/smetamath-rs/blob/master/README.md
  - label: mmj2 on GitHub
    url: https://github.com/digama0/mmj2
  - label: mmverify.py
    url: https://us.metamath.org/downloads/mmverify.py
  - label: metamath-test README
    url: https://github.com/david-a-wheeler/metamath-test/blob/master/README.md
  - label: mm-verifier-tests README
    url: https://github.com/LegionMammal978/mm-verifier-tests/blob/main/README.md
  - label: Metamath Home Page
    url: https://us.metamath.org/index.html
  - label: Other Metamath-Related Topics
    url: https://us.metamath.org/other.html
  - label: Metamath on Wikipedia
    url: https://en.wikipedia.org/wiki/Metamath
---

A verifier reads a proof as a list of labels and runs a stack; section 4.1.4 of the [Metamath book](https://us.metamath.org/downloads/metamath.pdf) is the whole rule. A hypothesis label pushes its expression; an assertion label needs a substitution making its hypotheses match the top of the stack, which is popped, and pushes the substituted assertion; at the end one entry must remain, equal to the statement being proved, and every substitution must respect the `$d` restrictions. The [home page](https://us.metamath.org/index.html): "Metamath verifiers do not make logical inferences; they just verify that the proof as stated is correct."

That is why set.mm can afford five. Its [verifiers page](https://github.com/metamath/set.mm/blob/develop/verifiers.md) states that every change to set.mm and iset.mm is re-verified by five different verifiers: [metamath.exe](https://github.com/metamath/metamath-exe) in C by Norman Megill, [checkmm](https://us.metamath.org/downloads/checkmm.cpp) in C++ by Eric Schmidt, [smetamath-rs](https://github.com/sorear/smetamath-rs/blob/master/README.md) in Rust by Stefan O'Rear, [mmj2](https://github.com/digama0/mmj2) in Java by Mel L. O'Cat and Mario Carneiro, and [mmverify.py](https://us.metamath.org/downloads/mmverify.py) in Python by Raph Levien. The same page says the algorithm "fits in two pages in the Metamath book", that the Rust verifier typically checks set.mm in under a second, and that every other database in the repository is verified by metamath-exe alone.

The machinery is a GitHub Actions workflow, [verifiers.yml](https://github.com/metamath/set.mm/blob/develop/.github/workflows/verifiers.yml), run on every push and pull request; each job downloads, builds and runs one verifier. checkmm arrives as one `.cpp` file from [its author's repository](https://github.com/EricSchmidt-119/checkmm), and its header comment makes the case for the arrangement: every verifier would have to share a defect for an invalid theorem to get in. It counts four where the prose page counts five.

Two test suites check verifiers themselves. [metamath-test](https://github.com/david-a-wheeler/metamath-test/blob/master/README.md) is a set of databases that should and should not pass, with drivers for six verifiers; without the failing cases, its README says, "if you replaced a verifier with the program "true" it would produce the same results". [mm-verifier-tests](https://github.com/LegionMammal978/mm-verifier-tests/blob/main/README.md) adds edge cases marked `$( should verify $)` or `$( should error $)`. The verifier project, set in week 5, is run against both.

Far more verifiers exist than gate set.mm: the home page says "over a dozen", the [Other Topics](https://us.metamath.org/other.html) list runs from Haskell and Lua to Julia, Zig and Lean, and [Wikipedia](https://en.wikipedia.org/wiki/Metamath) says at least 19. When mmj2 accepts your proof on Wednesday, it has run the stack above.

## Read

- [How are the databases verified?](https://github.com/metamath/set.mm/blob/develop/verifiers.md): one page, the most important this week.
- [verifiers.yml](https://github.com/metamath/set.mm/blob/develop/.github/workflows/verifiers.yml): the workflow itself; find the five jobs.
- [metamath-test README](https://github.com/david-a-wheeler/metamath-test/blob/master/README.md): why a verifier's tests need proofs that must fail.
