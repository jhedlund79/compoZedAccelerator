# Problem 2 - Asynchronous code without promises or blocking loops

## Description

In this exercise, imagine you are requesting the number of likes each given user in a group has on a service like Facebook. You will need code that:

1. Gets all users from `/users` (this is provided for you in [`index.html`](problem_2/index.html))
1. For each user, get their individual info asynchronously from `/users/:id`
1. Tally their "likes", and _after_ *all* requests are made, display the total on the screen

You may ***not***:

- Use a blocking loop (e.g. `while`) to wait for all responses to be done. So no:

    ```
    while(responseCount < 20) {}
    ```
- Use any 3rd-party libraries of any sort (lodash, jQuery, Q, etc...)
- Use built-in promises (we have not covered these yet)
- Use `setTimeout` or `setInterval` to "wait" for responses to be done.

Your final result should appear on the screen as fast as it possibly can. Do *not* modify `app.js`, all of your work should appear in [`index.html`](index.html).

## Setup

`cd` into this directory (from the path you cloned this to: `cd problem_2`). Then,

1. `npm install`
1. `npm start`
1. Go to `localhost:3000` in Chrome to view the page
1. Add your code inside of `index.html` where it says `// your code here`. A reminder that inline JavaScript is not the preferred style, but for the purpose of this exercise is fine.
