---
title: Install and verify
description: "Get metamath-exe and mmj2 running on your own machine, download set.mm, and watch a verifier check every proof in it."
week: 1
date: 2027-02-24
teachers:
  - teodor-ashby
related:
  - lectures/week-01
spec:
  - metamath-exe starts on your machine and reads set.mm without error
  - "`verify proof *` runs over set.mm and reports no errors"
  - mmj2 starts, loads set.mm, and opens its Proof Assistant window
links:
  - label: metamath-exe on GitHub
    url: https://github.com/metamath/metamath-exe
  - label: metamath-exe README
    url: https://github.com/metamath/metamath-exe/blob/master/README.TXT
  - label: mmj2 on GitHub
    url: https://github.com/digama0/mmj2
  - label: mmj2 README
    url: https://github.com/digama0/mmj2/blob/master/README.md
  - label: set.mm on GitHub
    url: https://github.com/metamath/set.mm
  - label: set.mm repository README
    url: https://github.com/metamath/set.mm/blob/develop/README.md
  - label: set.mm (current file)
    url: https://us.metamath.org/metamath/set.mm
  - label: Metamath book (PDF)
    url: https://us.metamath.org/downloads/metamath.pdf
  - label: Metamath Home Page (Downloads)
    url: https://us.metamath.org/index.html
---

By the end of the lab you have two programs installed and one large file checked. Nothing here is graded; it is the setup every later lab assumes.

## Before the lab

Bring a laptop with a Java runtime, which mmj2 needs ([mmj2 README](https://github.com/digama0/mmj2/blob/master/README.md)). Download `set.mm` from [us.metamath.org/metamath/set.mm](https://us.metamath.org/metamath/set.mm) or from the [set.mm repository](https://github.com/metamath/set.mm), which also holds the smaller databases used in later weeks ([repository README](https://github.com/metamath/set.mm/blob/develop/README.md)). Get `metamath-exe` either as the single portable executable the project publishes for Windows, macOS and Linux, or by compiling the C source with `cd src && gcc m*.c -o metamath`; both routes, and the platform-specific steps for running an unsigned download, are in the [metamath-exe README](https://github.com/metamath/metamath-exe/blob/master/README.TXT).

## In the lab

Put `set.mm` next to the executable and start the program with `./metamath set.mm`. At the `MM>` prompt, type `verify proof *`: the book's section 5.5.4 says this verifies every proof in the database, and section 5.1 gives the one-line form `./metamath 'read set.mm' 'verify proof *' exit` for running it from a shell ([Metamath book](https://us.metamath.org/downloads/metamath.pdf)). Watch it finish. That is the whole of verification: a program read every proof and objected to none.

Then mmj2. Follow its `INSTALL.md`, linked from the [README](https://github.com/digama0/mmj2/blob/master/README.md), and point its `RunParms.txt` at your `set.mm`; the [Downloads section of the home page](https://us.metamath.org/index.html) walks through that file. Loading set.mm can take about a minute on a slow machine, which the README warns about. When the Proof Assistant window opens, you are done.

## Afterwards

Keep both installs; week 3's lab starts in mmj2 and every proving lab after it does too. If either program would not run, tell the tutor before you leave so it is fixed before Monday.
