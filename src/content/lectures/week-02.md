---
title: The language
description: "What a .mm file is made of: the four-page specification in the Metamath book, a condensed introduction, two machine-readable grammars, and the $j annotations that tools read."
week: 2
date: 2027-03-01
teachers:
  - noor-castellane
related:
  - sessions/02-read-and-write
links:
  - label: Metamath book (PDF)
    url: https://us.metamath.org/downloads/metamath.pdf
  - label: metamath-book source on GitHub
    url: https://github.com/metamath/metamath-book
  - label: Metamath book, German translation (PDF)
    url: https://us.metamath.org/downloads/metamath-german.pdf
  - label: Metamath Home Page
    url: https://us.metamath.org/index.html
  - label: Introduction to Metamath (Ivan Kuckir)
    url: https://blog.ivank.net/introduction-to-metamath.html
  - label: Other Metamath-Related Topics
    url: https://us.metamath.org/other.html
  - label: MM.g4, an Antlr4 grammar
    url: https://github.com/naipmoro/gramm/blob/master/src/main/antlr4/naipmoro/gramm/MM.g4
  - label: tree-sitter-metamath README
    url: https://github.com/perrotuerto/tree-sitter-metamath/blob/main/README.md
  - label: Metamath $j commands
    url: https://github.com/metamath/set.mm/blob/develop/mm-j-commands.html
---

The whole language is specified in section 4.1 of the [Metamath book](https://us.metamath.org/downloads/metamath.pdf), pages 112 to 115, "about 4 pages long" as the [home page](https://us.metamath.org/index.html) puts it. This lecture reads those pages.

A database is a sequence of tokens, drawn from the 94 printable ASCII characters and separated by white space, of three kinds: *keywords*, which all begin with `$`; *labels*, which name statements; and *math symbols*, which are anything else. The keywords are `${ $} $c $v $f $e $d $a $p $. $= $( $) $[ $]`; the last four handle comments and file inclusion. After comments, a database is a sequence of statements: `$c` and `$v` declare constants and variables, `$f` and `$e` are hypotheses, `$d` restricts substitution, `$a` asserts an axiom, `$p` asserts a theorem and carries its proof after `$=`, and `${ $}` bounds a block, which limits how long a declaration stays active. A proof is a list of labels and nothing more; section 4.1.4 says what makes one correct, which is week 3.

The book is by Norman Megill with extensive revisions by David A. Wheeler, runs to 248 pages, has its source and errata on [GitHub](https://github.com/metamath/metamath-book) under CC0, and exists in a [German translation](https://us.metamath.org/downloads/metamath-german.pdf).

Ivan Kuckir's [Introduction to Metamath](https://blog.ivank.net/introduction-to-metamath.html) opens "Official Metamath description has 211 pages. This is a "shrinked" version", and presents Metamath as a language for defining a formal grammar: `$c` declares terminal symbols, `$v` nonterminals. The site's [Other Topics page](https://us.metamath.org/other.html) names him as the author of the MM Tool verifier.

Two grammars exist as machines read them: [MM.g4](https://github.com/naipmoro/gramm/blob/master/src/main/antlr4/naipmoro/gramm/MM.g4), the Antlr4 grammar behind the gramm verifier, on one screen, where a database is `stat* EOF`, a label is `[A-Za-z0-9._-]+`, a math word is any run of characters without white space or `$`; and a [tree-sitter grammar](https://github.com/perrotuerto/tree-sitter-metamath/blob/main/README.md), which parses a database into a syntax tree from Python. Neither says whether a proof is right; a grammar only tokenises and parses.

Last, `$j`. The [$j commands page](https://github.com/metamath/set.mm/blob/develop/mm-j-commands.html) describes "a way to include information in metamath proof files which are not needed for verifying, but which are useful for other tools like proof assistants, definition checkers". They are a kind of comment (book, section 4.4.3), so a verifier may skip them; week 7's definition exercise depends on them.

## Read

- [Metamath book](https://us.metamath.org/downloads/metamath.pdf), section 4.1: the four pages themselves, twice before Wednesday.
- [Introduction to Metamath](https://blog.ivank.net/introduction-to-metamath.html): the same material as a grammar, in a few screens.
- [MM.g4](https://github.com/naipmoro/gramm/blob/master/src/main/antlr4/naipmoro/gramm/MM.g4): the surface syntax at its shortest.
