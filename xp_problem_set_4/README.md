# Building web applications with `http`

## Approach

In this problem set you will leverage your knowledge of `http` to build out a simple web application, step-by-step. As usual, work cooperatively with your pair to discuss solution ideas and how you want to structure the code.

For the purpose of this exercise, TDD may be omitted.

Web application frameworks like [Ruby on Rails](http://rubyonrails.org/), [Express](http://expressjs.com/), [Django](https://www.djangoproject.com/) have become commonplace in web development. Feedback is an XP value. Frameworks, with the all of the built-in functionality they provide, are one way to help developers ship faster and get market feedback sooner. Django states it proudly and explicitly on its homepage, "The web framework for perfectionists with deadlines."

Like most other decisions in software development, a healthy dose of [pragmatism](http://xkcd.com/386/) is important; frameworks are not a panacea and are not the solution for every type of problem. In this exercise, frameworks will be put to the side so that you can get a better feel for what handling HTTP requests involves.

## Problems

1. Begin by creating a route, `/`, which renders an HTML page containing links to `/first-of-pair`, `/second-of-pair`, and `/the-pair` (you can put any text you would like for the links).
1. Create a simple HTML document containing at least one paragraph (`<p>`) tag about one member of the pair. When a user visits `/first-of-pair`, or clicks the link from the root route, they are shown the simple HTML document.
1. Create a simple HTML document containing at least one paragraph (`<p>`) tag about the other member of the pair. When a user visits `/second-of-pair`, or clicks the link from the root route, they are shown the simple HTML document.
1. Create a simple HTML document containing at least one paragraph (`<p>`) tag about something the pair has in common. When a user visits `/the-pair`, or clicks the link from the root route, they are shown the simple HTML document.
1. When any other route is attempted, a 404 status code is returned along with a cheeky message or funny 404 page.
1. [stretch] Is there any way to refactor your implementation of rendering the HTML pages? How might a framework approach this type of problem?
1. [stretch] Create a route in the application for `/greeting`. This route will utilize a `name` query string parameter to dynamically change the content of the page. If the end user visits `/greeting?name=finn`, then the page should show `"Welcome, Finn!"` inside of a paragraph (`<p>`).
