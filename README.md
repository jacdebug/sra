This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). For a detailed README concerning the internal structure of the project, please refer to that repository.

Below you will find some simple information about how to run the app and make changes.<br>

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (stage 2 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. You may install other dependencies (for example, React Router) with `npm`:

```
npm install --save <library-name>
```

## Adding a Stylesheet

This project setup uses [Webpack](https://webpack.js.org/) for handling all assets. Webpack offers a custom way of “extending” the concept of `import` beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to **import the CSS from the JavaScript file**:

### `Button.css`

```css
.Button {
  padding: 20px;
}
```

### `Button.js`

```js
import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className="Button" />;
  }
}
```

### Tasks

Once you've set up the repo successfully and run `npm start`, a fake API service (using [json-server](https://github.com/typicode/json-server)) is available at [http://localhost:3003/files](http://localhost:3003/files).

For details of the available API Methods, please read the [json-server](https://github.com/typicode/json-server) documentation. For the purposes of these tasks, you will only need to perform a simple `GET` request with some parameters.

1. Retrieve a list of files and display them on the page (with pagination).
2. Provide a way of sorting the files based on, e.g., size.
3. Provide a way of filtering the files based on file name.
4. Provide some tests for your new functionality.

This repository is purposefully bare-bones: no state management or library for asynchronous requests are included. Feel free to install your preferred libraries and structure things as you see fit.

In order to achieve the above tasks, you will have to give the app some structure (e.g. a reducer to handle actions, new React Components). Though the tasks are fairly simple, you should follow best practices to ensure you could build on it in the future.
