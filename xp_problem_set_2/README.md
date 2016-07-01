# Digging Deeper into JavaScript

## Approach

As you progress through the list of problems below, pick a different pairing technique (Ping Pong Pairing, Pólya's method, Restricting techniques, etc. or create your own) for each problem, or discuss a suitable plan for you and your pairing partner.

For each problem, begin by first writing a failing test and then making it pass. Repeat this process until all required functionality for the problem has been implemented. At each passed test, make sure to ask yourself if what you have done is the _minimum_ required to make the test pass. Also, refactor the code if you see an opportunity to.

Although these are not production problems, treat them as if they are. Think through edge cases (if any exist) and make sure that at all steps you use tests to document your thoughts about the code.

Work together and make sure you are communicating with each other. Sometimes communication with a pair can be "can we take five minutes to solve this on paper apart from each other and then re-group?" Effective communication does not necessitate non-stop talking, but it does necessitate communicating what you are thinking and how you are feeling.

## Problems

In these exercises there are no right or wrong answers, only decisions to make and documentation to write via TDD. The goal is to work cooperatively with your pair to explore the problem, making it as simple or as complex (in addition to what is presented) as you would like.

These problems are intended to help you focus on building endurance in pairing and exercise communication skills. This is achieved by presenting problems that can be approached in a wide variety of ways and at varying levels of depth; it is likely that no two sets of pairs will end up solving the same set of problems.

_But how do these JavaScript concepts tie in to this?_ You will certainly need to create constructors, instances, and invoke methods on those instances at times today; do not hesitate to refer to the examples as you gain comfort and familiarity with the JavaScript language and Mocha/Chai for testing.

One thing you may find helpful is to use source control, like [`git`](https://git-scm.com/), to manage different versions of the same exercise.

Take your time and go deep in areas you find interesting.

1. Driving a Taxi

  What are the main functions of a taxi? Taxis:

    1. Drive places
    1. Pick up passengers
    1. Drop off passengers

  Model how a taxi behaves in code. What are the states and behaviors associated with a `Taxi`? How does revenue work for a taxi?

  As an expansion, suppose that regulations are put in place that effect how a taxi is able to behave with respect to how many passengers it may have. An example regulation may be that if a passenger is under the age of 12, then that passenger requires two seats. Thus, if a taxi had capacity for 5 passengers, it would be able to hold the driver and two children (`1 + 2 + 2`), or the driver and a parent and their child (`1 + 1 + 2`), but *not* the driver and a parent with two children (`1 + 1 + 2 + 2 > 5`).

1. Build an Organization Chart

  Building an organization chart always seems like a simple task, but complexity arises in the forming of hierarchies. Remember to use TDD at every step to help guide the development process.

  In any organization, every person is an _employee_, but some people are both _managers_, in that they have reports, and _employees_, in that they report to someone. This is a [sample organization chart](https://saylordotorg.github.io/text_managerial-accounting/section_05/16fde2d3f3ada19d2562ba44d7a5a5a5.jpg), for the purpose of this exercise the notion of a Board of Directors may be omitted.

  First, begin by modeling an employee. Next, model a manager. Are there any common elements shared between employees and managers? If there are spend time to refactor.

  You may want to begin by exploring the problem on a whiteboard or by starting with an assumption like a manager can have at most one report and evolving from there to a more complex solution.

  Some potential areas for expansion are:

  1. Can you create a text-based graphical representation of an organization?
  1. Can you show depth-first and breadth-first lineages for a manager?
  1. How do you add compensation to this model?
  1. Given a model for compensation, could you compute what the monthly burn of a given firm looks like?
  1. Can you write functionality that when given a company allows for people to be promoted, demoted, or otherwise reassigned in the organization?

1. Grade book

  Suppose you are an instructor in a traditional education environment. In this environment a class has students and an instructor. The instructor is responsible for creating, assigning, and grading homework, then recording the scores for the homework in a grade book (or record).

  Write code that models an environment in which instructors may create and assign work to students, then record grades. What is the flow of work from the instructor to the students? How does state change occur? What are the states?

### Test Setup

* General setup for an application with tests:
  1. `mkdir app_name`
  1. `cd app_name`
  1. `npm init`
  1. `npm install --save-dev mocha chai`
  1. `mkdir test`
  1. `touch test/my_first_test.js`
  1. `node_modules/mocha/bin/mocha test`

It is recommended to make a test per problem, or figure out a similar organization strategy that works for you and your pair.

## Reflection

Stop coding approximately 15 minutes before the end of the exercise and have a discussion with your pair. There are a few different ways to do this. One way to facilitate the discussion is to start by taking 3-5 minutes to each create a list of thing you did:

  1. well
  1. poorly
  1. somewhere in between

Some questions to help frame this could include:

  1. At what points were we delivering?
  1. What was happening during times where code was being delivered?
  1. At what points were we not delivering?
  1. What was causing us to not deliver?
  1. When were defects introduced and what introduced them?
  1. Did we write tests before code at all points in time?
  1. Did we communicate openly and effectively?
  1. Were we able to create a positive social environment that promotes experimentation and education?
  1. Did one member of the pair dominate the session?
  1. Was there a specific pairing technique that was effective?

Combine both lists and review all items. As you are reviewing the items ask yourself:

  1. If it is a problem, is there an easy solution to this problem? What causes this problem? How can the causes of this problem be eliminated?
  1. Moving forward would you do this again? _Should_ you?
  1. What did I learn from this? What is a reasonable takeaway from this?
