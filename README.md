# Type-Safe Styles [![Build Status](https://travis-ci.org/paulyoung/tss.svg?branch=master)](https://travis-ci.org/paulyoung/tss)


## Installation
```
npm install --save @paulyoung/tss
```

## Usage
Add the following entries to your `.flowconfig`:
```
[ignore]
.*/node_modules/.*

[options]
module.name_mapper='@paulyoung/tss' -> '@paulyoung/tss/src'
```

Write type-safe styles:
```javascript
// @flow

import {
  transform,
  Declaration,
  Margin
} from "@paulyoung/tss";

const m0: () => {
  margin: Declaration<Margin>
} = () => ({
  margin: new Declaration(0)
});

const typeSafeStyles: {
  margin: Declaration<Margin>
} = m0();

const inlineStyles: {
  [key: string]: any
} = transform(typeSafeStyles)

console.log(inlineStyles); // { margin: 0 }
```


### Safety against incorrect property names

```javascript
// @flow

import { Declaration, Margin, Padding } from "@paulyoung/tss";

const m0: () => {
  margin: Declaration<Margin>
} = () => ({
  margin: new Declaration(0)
});

// Error: property `padding` not found in object type
const margin: { padding: Declaration<Margin> } = m0();
```


### Safety against incorrect property types

```javascript
// @flow

import {
  Declaration,
  MarginTop,
  MarginRight,
  MarginLeft
} from "@paulyoung/tss";

const mxn1: () => {
  marginLeft: Declaration<MarginLeft>,
  marginRight: Declaration<MarginRight>
} = () => ({
  marginLeft: new Declaration(.5),
  marginRight: new Declaration(.5)
});

// Error: `MarginTop` This type is incompatible with `MarginLeft`
const horizontalMargin: {
  marginLeft: Declaration<MarginTop>,
  marginRight: Declaration<MarginRight>
} = mxn1();
```


### Merging styles

```javascript
// @flow

import {
  Declaration,
  ListStyle,
  PaddingLeft,
  TextAlign
} from "@paulyoung/tss";

const center: () => {
  textAlign: Declaration<TextAlign>
} = () => ({
  textAlign: new Declaration("center")
});

const listReset: () => {
  listStyle: Declaration<ListStyle>,
  paddingLeft: Declaration<PaddingLeft>
} = () => ({
  listStyle: new Declaration("none"),
  paddingLeft: new Declaration(0)
});

const menuStyles: {
  listStyle: Declaration<ListStyle>,
  paddingLeft: Declaration<PaddingLeft>,
  textAlign: Declaration<TextAlign>
} = {
  ...listReset(),
  ...center()
};
```
