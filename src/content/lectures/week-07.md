---
title: Definitions and soundness
description: >-
  A Metamath definition is an axiom to the verifier, so a wrong one can make
  the database inconsistent without any proof failing. What the extra check is
  and which tool runs it.
week: 7
date: 2027-04-19
teachers:
  - noor-castellane
related:
  - sessions/07-a-definition-that-fails
  - assessments/definition-exercise
links:
  - label: "Metamath Proof Explorer: Appendix 4, A Note on Definitions"
    url: https://us.metamath.org/mpeuni/mmset.html
  - label: "How are the databases verified? (set.mm)"
    url: https://github.com/metamath/set.mm/blob/develop/verifiers.md
  - label: "Metamath Zero README"
    url: https://github.com/digama0/mm0
  - label: "mmj2 Batch Command Documentation"
    url: https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html
---

A definition in Metamath is written as an axiom, and the proof verifier cannot
tell the two apart. The Metamath Proof Explorer's
[note on definitions](https://us.metamath.org/mpeuni/mmset.html) says so
directly: "The only way to add a definition to a database is to introduce it
as a new axiom." Its example is the number 2. Change `df-2` from
`2 = ( 1 + 1 )` to the self-referential `2 = ( 1 + 2 )` and `0 = 1` becomes
provable, while the verifier, which sees only one more `$a` statement, "is
perfectly content to use it as a new fact and does not issue an error
message."

So a proof check is not enough: the five verifiers that re-check set.mm on
[every change](https://github.com/metamath/set.mm/blob/develop/verifiers.md)
only ask whether each proof follows from the statements before it. The
[Metamath Zero README](https://github.com/digama0/mm0) puts it as one of
Metamath's soundness issues: "Definitions are just axioms in Metamath. There
are tools in the Metamath ecosystem to check that definitions are
conservative, but they are not built in to the verifier".

## What the check is

The [same note](https://us.metamath.org/mpeuni/mmset.html) gives the standard.
A definition is sound if it is *eliminable* (any theorem using the defined
symbol can be rewritten as an equivalent one without it) and *conservative*
(after that rewriting, the theorem is still provable from the original axioms).
In plain words: the new symbol is an abbreviation you could always expand
away, and expanding it adds nothing the axioms could not already prove.

## Which tool performs it

set.mm's own documentation says
["definitions are checked by mmj2"](https://github.com/metamath/set.mm/blob/develop/verifiers.md).
The [Proof Explorer note](https://us.metamath.org/mpeuni/mmset.html) records
that Mario Carneiro added the check to mmj2 and that it verifies "all but four
definitions": `df-bi`, `df-clab`, `df-cleq` and `df-clel` "need to be justified
with metalogic outside of mmj2's capabilities."

In mmj2's
[batch documentation](https://github.com/digama0/mmj2/blob/master/doc/BatchCommandDocumentation.html)
the check "runs a soundness check on all axioms in the database, except those
specified in the list." The recommended exclusions are
`ax-*,df-bi,df-clab,df-cleq,df-clel`, "which will always fail the check." The
RunParm `SetMMDefinitionsCheckWithExclusions` is deprecated in favour of
`RunMacro,definitionCheck,...` with the same arguments, which is what
Wednesday's lab runs.

The [definition exercise](/assessments/definition-exercise/) is set this
week: a definition that passes this check, one that fails it, and a write-up
of what the check caught.

## Read

- [A Note on Definitions](https://us.metamath.org/mpeuni/mmset.html), Appendix
  4 of the Proof Explorer home page: the note this lecture follows.
- [How are the databases verified?](https://github.com/metamath/set.mm/blob/develop/verifiers.md):
  one page on what is checked on every change to set.mm, and by what.
