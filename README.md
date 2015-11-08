# Type-Safe Styles

```javascript
// @flow

import Declaration from "./src/Declaration";
import type { Margin, Padding } from "./src/Properties";

function m0(): { margin: Declaration<Margin> } {
  return {
    margin: new Declaration(0)
  };
}

// Error: property `padding` not found in object type
// Error: `Margin` This type is incompatible with `Padding`
var styles: { padding: Declaration<Padding> } = m0();
```

```javascript
// @flow

import Declaration from "./src/Declaration";
import type { MarginTop, MarginRight, MarginLeft } from "./src/Properties";

function mxn1(): {
  marginLeft: Declaration<MarginLeft>,
  marginRight: Declaration<MarginRight>
} {
  return {
    marginLeft: new Declaration(.5),
    marginRight: new Declaration(.5)
  };
}

// Error: `MarginTop` This type is incompatible with `MarginLeft`
var styles: {
  marginLeft: Declaration<MarginTop>,
  marginRight: Declaration<MarginRight>
} = mxn1();
```

```javascript
// @flow

import Declaration from "./src/Declaration";
import type { ListStyle, PaddingLeft, TextAlign } from "./src/Properties";

function center(): { textAlign: Declaration<TextAlign> } {
  return {
    textAlign: new Declaration("center")
  };
}

function listReset(): {
  listStyle: Declaration<ListStyle>,
  paddingLeft: Declaration<PaddingLeft>
} {
  return {
    listStyle: new Declaration("none"),
    paddingLeft: new Declaration(0)
  };
}

var reset = listReset();

var menuStyles: {
  listStyle: Declaration<ListStyle>,
  paddingLeft: Declaration<PaddingLeft>,
  textAlign: Declaration<TextAlign>
} = {
  ...listReset(),
  ...center()
};
```
