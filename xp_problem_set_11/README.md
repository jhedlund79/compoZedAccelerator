# Exploring CSS and React

## Approach

Begin by taking a minute to think about CSS. Can you create a sentence that explains the basic concept(s) behind CSS? CSS involves using a _selector_ to target HTML elements (by class, id, tag, etc.) and then apply a set of visual _rules_, defined as key/value pairs, to the elements that meet the selector's criteria.

Reflecting on HTML, make sure you can define what an attribute is for an HTML tag. In particular, an _attribute_ is an additional piece of data which may be associated with an HTML tag. This is an example:

```
<a href="http://www.galvanize.com">Check out Galvanize!</a>
```

In this example, `href` is an attribute of the `<a>` (anchor) tag.

But why is this understanding of HTML tags and attributes important? Primarily because of the use of _JSX_ in [React](http://facebook.github.io/react/). ["JSX is a XML-like syntax extension to ECMAScript without any defined semantics."](https://facebook.github.io/jsx/) Although JSX is not a strict requirement for using React, it simplifies things. JSX allows for easier-to-read code like this:

```
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
```

to replace the more verbose, native JavaScript it transpiles to:

```
var HelloMessage = React.createClass({
  displayName: "HelloMessage",

  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
});
```

Essentially, JSX is a mix of JavaScript and a tag-based syntax that looks and feels like XML (or HTML).

## Problems

This exercise is split into two problems, followed by some stretch exercises; problem one focuses on CSS and problem two focuses on writing React components.

1. Spend two hours (time boxed) working on the examples in [this repository](https://github.com/gSchool/css-exercises). Your goal is to get as far as possible. The instructions for that repository say to use Python's SimpleHTTPServer, which should be preinstalled with Mac OSX. If you would prefer you can use the Node [http-server](https://www.npmjs.com/package/http-server) instead, you can install it using `npm install -g http-server` and launch it by `cd`-ing into the appropriate directory and typing `http-server`.

  _Note_: You will need to kill the server each time you change exercise or you will get an error like `Error: listen EADDRINUSE :::8080`.

1. Earlier we began to see what React code looks like. With your pair, read through [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html) and work through the examples in the article. The article is written by a member of the team who produces React and is very helpful in understanding how components work together. This section will take you through using `props`.

  So far, our React components have been quite simple and have no customization. The first way we can customize, or parameterize, our components is by using properties or `props`. You can think of props as analogous to attributes in HTML elements (forgot what attributes are? [look here](https://www.google.com/search?q=html+attributes&oq=html+attributes&aqs=chrome..69i57l2j69i59j69i60l3.1677j0j1&sourceid=chrome&es_sm=119&ie=UTF-8)). Remember that in the case of HTML, the appearance of elements can be changed by the values of the attributes, for example `<input type="text">` is very different than `<input type="submit">`. Another way to think about this for React is that `props` are a way to parameterize the component and show variable content.

  ### A reminder of `props` for a Component

  ```
  'use strict'
  var HelloName = React.createClass({
    render : function() {
      return (
        <h1>Hello {this.props.name}</h1>
      );
    }
  });

  ReactDOM.render(<HelloName name="Andreas"/>, document.body);
  ```

  ### Validating our Props

  We can also add validations on our props to ensure they are certain data types and that they are present. Check out [this](https://facebook.github.io/react/docs/reusable-components.html) for more information.

  Say we want to create a component called `AnswerToEverything`, which has a prop that should be a number and required. How would you do that? Before reading the solution below, try it with your pair.

  _Solution_:

  ```
  'use strict'
  var AnswerToEverything = React.createClass({
    propTypes: {
      number: React.PropTypes.number.isRequired
    },
    render : function() {
      return (
          <h1>Hello {this.props.number}</h1>
      )
    }
  });

  ReactDOM.render(<AnswerToEverything number={42}/>, document.body)
  ```

  What happens if we don't include the number property or if we change it to be something that is not a number? Devise an experiment and come with a conclusion about what happens when a required `props` value is omitted.

  _Note:_ Be sure to use `react.js` and not `react.min.js` as validation warning errors will not show up in the browser's console if you use the minified version.

  ## Creating Multiple Components

  So far all of our applications have had a single component, but as we have seen in larger applications there are generally many components. Let's create a small application that has two components. In this application there is a list of books, so we settle on two React components; `Book` and `BookList`. `BookList` will be an unordered list (`<ul>`) that contains `Book` components. The `Book` components will simply be list items (`<li>`) containing a string with the title of a single book.

  For example, we take an array of books, like `var books = ["Cat's Cradle", "Grapes of Wrath", "Infinite Jest"]`, and iterate over `books` to print out each title as the prop for a `Book` React component. Try this yourself first and check out the solution for help.

  _Solution_:

  ```
  var books = ["Cat's Cradle", "Grapes of Wrath", "Infinite Jest"];

  var Book = React.createClass({
    render: function() {
      return (
        <li>{this.props.title}</li>
      );
    }
  });

  var BookList = React.createClass({
    books: books.map(function(book){
      return (
        <Book title={book}/>
      )
    }),
    render: function() {
      return (
        <ul>
          {this.books}
        </ul>
      )
    }
  });

  ReactDOM.render(<BookList/>, document.getElementById("bookList"));
  ```

  ## A Warning

  If we look in the chrome console we see the following warning:

  "Warning: Each child in an array or iterator should have a unique "key" prop. Check the render method of BookList. See https://fb.me/react-warning-keys for more information."

  Check out [this](http://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js) Stack Overflow for why this is encouraged by React. How can we refactor our previous example to remove this warning?

  _Hint_: We are using `map` to iterate over our array. What additional parameters does the method we provide to `Array.prototype.map` receive?

  _Solution_:

  ```
  var BookList = React.createClass({
    books: books.map(function(book,index){
      return (
        <Book key={index} title={book}/>
      )
    }),
    render: function() {
      return (
        <ul>
          {this.books}
        </ul>
      )
    }
  });
  ```

  ## Adding CSS to React Components

  Right now our components are a bit dull, let's add an external stylesheet and make our books look just a bit nicer. React components take in a property called `className` where we can attach classes.

  ### Why `className` and not `class`?

  According to the React docs:

  "Since JSX is JavaScript, identifiers such as `class` and `for` are discouraged as XML attribute names. Instead, React DOM components expect DOM property names like `className` and `htmlFor`, respectively."

  ### Accessing a Child component's props

  A parent component can access its child components using `this.props.children`. You can read more [here](https://facebook.github.io/react/tips/children-props-type.html). This is an example with `this.props.children`:

  ```
  var App = React.createClass({
    render: function() {
      return (
        <h1>{this.props.children}</h1>
      );
    }
  });

  ReactDOM.render(<App>Hello Everyone!</App>, document.body)
  ```

  Here is another example:

  ```
  var Parent = React.createClass({
    render: function(){
      return (
        <h1><Child>Hello!</Child></h1>
      )
    }
  });

  var Child = React.createClass({
    render: function(){
      console.log(this.props)
      return (
        <h1>{this.props.children}</h1>
      )
    }
  });

  ReactDOM.render(<Parent/>, document.body)
  ```

  ### Questions to Answer

  1. What are props?
  1. React defines props as "immutable", what does that mean?
  1. What is a PropType?
  1. How are props passed from parent to child components and how do parent components reference their children's props?
  1. Why does React give us this warning? "Each child in an array or iterator should have a unique "key" prop."
  1. Imagine you had an array of car manufacturers, e.g. `["Aston Martin", "BMW", "Audi"]`. How could we iterate over this array and print out each one using React? Validate that each manufacturer is a string as well. Optionally, style your components with CSS using the `className` prop.
1.[stretch] Begin by re-reading the sections about `state` in React from [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html). Using your new knowledge about `state`, build a Single Page CRUD Application using React, without using Express, and instead using only `state` to store what is going on. This means that a page refresh will remove everything but your initially provided state. Data should not be persisted to a database (how would it be?). However, the index list should update when the new form is submitted, the form should be cleared, etc. This is a challenging exercise so do not beat yourself up and go slowly trying to leverage _Thinking in React_ and its example code as much as possible. How do you mutate `state` values?

## Reflection

Give yourself 10-15 minutes before the end of the day to answer the following questions with your pair:

1. One of you explain the fundamental concepts behind CSS to the other. The person listening should be looking for an explanation that uses terminology that is consistent with what was used in class.
1. What are props in React? Create a sample component with your pair and make sure you are able to explain what is going on.
1. What was effective when doing research as a pair? What wasn't? Did you have to communicate differently than you would while coding?
1. Can you name/pioneer a technique for "paired research"? Is there an equivalent activity to something like Ping Pong pairing?
1. Give each other one piece of critical feedback and one piece of praise about the success/failures of today.
