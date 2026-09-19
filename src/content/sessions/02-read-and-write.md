---
title: Read a small database, write a smaller one
description: "Read miu.mm and peano.mm line by line, then write a database of about ten lines by hand and get a verifier to accept it."
week: 2
date: 2027-03-03
teachers:
  - teodor-ashby
related:
  - lectures/week-02
  - assessments/verifier-project
spec:
  - you can name each statement type in miu.mm and say what it declares
  - your own database of about ten lines reads into metamath-exe and passes `verify proof *`
  - it declares its constants and variables, states one axiom, and proves one theorem from it
links:
  - label: miu.mm
    url: https://us.metamath.org/metamath/miu.mm
  - label: peano.mm
    url: https://us.metamath.org/metamath/peano.mm
  - label: Other Metamath-Related Topics
    url: https://us.metamath.org/other.html
  - label: Metamath book (PDF)
    url: https://us.metamath.org/downloads/metamath.pdf
  - label: set.mm repository README
    url: https://github.com/metamath/set.mm/blob/develop/README.md
  - label: Copyright Terms
    url: https://us.metamath.org/copyright.html
  - label: mmverify.py
    url: https://us.metamath.org/downloads/mmverify.py
---

Two databases to read, one to write, all within the hour.

## Before the lab

Download [miu.mm](https://us.metamath.org/metamath/miu.mm) and [peano.mm](https://us.metamath.org/metamath/peano.mm); both are also in the [set.mm repository](https://github.com/metamath/set.mm/blob/develop/README.md), which describes the first as a demonstration based on Hofstadter's work and the second as Peano arithmetic. The [Other Topics page](https://us.metamath.org/other.html) credits peano.mm to Robert Solovay; it is the one database under the GPL rather than public domain ([Copyright Terms](https://us.metamath.org/copyright.html)). Have section 4.1 of the [Metamath book](https://us.metamath.org/downloads/metamath.pdf) open.

## In the lab

Start with miu.mm, which the book prints in full as Appendix D. Its own comment describes a system with three symbols `M`, `I` and `U`, one axiom `MI` and four rules; the file declares five constants, since it also needs `wff` and `|-`, and states each rule as an `$a` inside a block with an `$e` hypothesis. Label every statement by its keyword. Note the comment saying the system allows empty formulas, so `SET EMPTY_SUBSTITUTION ON` is needed before proving in metamath-exe.

Then skim peano.mm for shape: how blocks nest, where `$d` appears, how long the proofs are. It returns in week 8.

Then write your own. The pattern is the example in section 2.2.2 of the book, pages 40 to 42: declare constants with `$c`, a variable with `$v`, give it a type with `$f`, state an axiom with `$a`, and prove one `$p` statement whose proof is a list of labels. Ten lines is enough. Run `verify proof *` in metamath-exe until it passes. If there is time, run [mmverify.py](https://us.metamath.org/downloads/mmverify.py) over the same file; its header comment gives the command.

## Afterwards

Keep the file. Week 5 sets the verifier project, and the first thing a verifier of your own should accept is a database you wrote and understand completely.
