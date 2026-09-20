# Process overview

## What I built

A twelve-week course on Metamath, the proof language whose whole point is
that every claim can be checked by a small program. The site holds the
course the way a student would meet it: a lecture and a lab each week, three
assessments that add up, a deck, and one habit throughout: every factual
claim about Metamath links the public page that makes it.

## How I got here

Metamath was decided on as the topic first. The opening sessions were a
brainstorm with Claude about how to approach it, and settled the method: an
agent writes plausible sentences about Metamath readily and their errors are
hard to spot at speed, so the course would be built from sources, not
recall.

Most of the API budget for this assignment went into a separate repository:
a catalogue of primary sources about Metamath, each page fetched and cached,
each description quoted rather than paraphrased. Once that existed, its
contents were reviewed week by week to see what they could carry, and that
review decided the shape of the course. Some weeks were rich; the history
week was not, and became a miscellany with one paragraph of history that
says what is documented and stops.

The harness came next. The parts of earlier harnesses that apply to a site
read by strangers were combined
([`853beaa`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-amackay/commit/853beaacb2780cb86f13d3852cbe36b4150cf6a1)):
three voices never blurred, a prose budget, nothing that leaks another repo.
That harness was then rewritten for this course
([`c96e42c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-amackay/commit/c96e42c3215520db3b79b2b6f7fabf134147a2af))
around two rules. The prose rule: for any piece of prose, ask what the reader
knows and wants at that point, deliver it as quickly as possible, and do not
assume they read to the end. The sourcing rule: a claim about Metamath is
made only where a public page says it, linked at the claim; where the record
is silent the course is too. The mechanical half of the sourcing rule became
a check in `spec/`
([`a882e6a`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-amackay/commit/a882e6adfcd1e05de0ed2e2cbad940ebdbbe0676)):
every outside link on the site is on a listed source set, alongside tests
for the shape of the weeks, the calendar and the assessment sum.

With the harness in place the content was one unattended run: the course
record and cast
([`1d5a11e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-amackay/commit/1d5a11e50f52cf1622af064f277b20cd06f41e03)),
twelve weeks written by four workers reading only the cache
([`fd42780`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-amackay/commit/fd42780cc1f8957d6019ad5a6c6b0f1fe0e11d30)),
the assessments
([`65c5013`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-amackay/commit/65c5013d00f518c0ffb8c9da4b688747ae70bec5))
and a deck. Directions given after reading the result changed the course
more than the brief had: the verifier project became
the centrepiece, in a language of the student's choice but not one of the
five that set.mm already trusts
([`3dc1b65`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-amackay/commit/3dc1b6519179508d65d09544403085645aeaf36c)).
Its details are deliberately "to follow", as a project page reads in the
first week of a course.

Two checks the agent could not do alone. The build could not run where the
agent worked, so the first real `pnpm check` was CI,
which found two faults the agent's own checker had missed
([`230b482`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-amackay/commit/230b4828e7a48ef149e9d60c2172f271bd8e5cfb),
[`0b215cc`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-amackay/commit/0b215cc0ed42dccd7730e95a2b2b5bf878d298ea)).
Then a final pass by a second agent, reading as a student would, found five
pages that disagreed with their assessment pages and two commands in the deck
that did not match their sources
([`da8b500`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-amackay/commit/da8b500d39c359030e8678a99bc74be181c68055)).
Coherence across pages is not something the harness tests; it needs a reader.

Thrown away: eleven decks written in one pass, cut to three
([`70f806d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-amackay/commit/70f806d11ae72e482fc1d109b4f8bc96ce02f3ac));
a week 8 milestone that would have turned a lab into an exam; a rule that
every public sentence would be reviewed before it shipped, replaced by a
review of the whole at the end. Left out of the harness on purpose: any rule
about tone or length in words, and any test that a claim follows from its
source. The first produces prose written to a rule; the second is a reading,
and a person does it.
