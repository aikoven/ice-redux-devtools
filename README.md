# Ice Redux DevTools [![npm version][npm-image]][npm-url]

Handles serialization of [ZeroC Ice](https://github.com/zeroc-ice/ice) stuff for
[Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension).
Transparently converts Ice object instances to plain JS objects before sending
them to DevTools. On time travel converts them back to actual instances before
they end up in application code. Supports `long`, `enum`, `struct`, `dictionary`,
`exception` and `class`.

## Installation

    $ npm install ice-redux-devtools

## Usage

```ts
import {composeWithDevTools} from 'redux-devtools-extension';
import {enhancerOptions} from 'ice-redux-devtools';

const composeEnhancers = composeWithDevTools(enhancerOptions);

const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
```

[npm-image]: https://badge.fury.io/js/ice-redux-devtools.svg
[npm-url]: https://badge.fury.io/js/ice-redux-devtools