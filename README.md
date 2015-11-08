# Type-Safe Styles

```javascript
// @flow

import Declaration from "./src/Declaration";
import type { Margin, Padding } from "./src/Properties";

function m0(): Declaration<Margin> {
  return new Declaration(0);
}

// Error: `Margin` This type is incompatible with `Padding`
var styles: {
  padding: Declaration<Padding>
} = {
  padding: m0()
};
```

```javascript
// @flow

import Declaration from "./src/Declaration"
import type { MarginTop, MarginRight, MarginLeft } from "./src/Properties"

function mxn1(): [Declaration<MarginLeft>, Declaration<MarginRight>] {
  return [new Declaration(.5), new Declaration(.5)]
}

var margins = mxn1()

// Error: `MarginTop` This type is incompatible with `MarginLeft`
var styles: {
  marginTop: Declaration<MarginTop>,
  marginRight: Declaration<MarginRight>
} = {
  marginTop: margins[0],
  marginRight: margins[1]
};
```

```javascript
// @flow

import Declaration from "./src/Declaration";
import type { ListStyle, PaddingLeft, TextAlign } from "./src/Properties";

function center(): Declaration<TextAlign> {
  return new Declaration("center");
}

function listReset(): [Declaration<ListStyle>, Declaration<PaddingLeft>] {
  return [new Declaration("none"), new Declaration(0)];
}

var reset = listReset()

var menuStyles: {
  listStyle: Declaration<ListStyle>,
  paddingLeft: Declaration<PaddingLeft>,
  textAlign: Declaration<TextAlign>
} = {
  listStyle: reset[0],
  paddingLeft: reset[1],
  textAlign: center()
};
```
