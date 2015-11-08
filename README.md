# Type-Safe Styles

```javascript
// @flow

import { Declaration, Margin, Padding } from "type-safe-styles";

const m0: () => {
  margin: Declaration<Margin>
} = () => ({
  margin: new Declaration(0)
});

// Error: property `padding` not found in object type
// Error: `Margin` This type is incompatible with `Padding`
const styles: { padding: Declaration<Padding> } = m0();
```

```javascript
// @flow

import { Declaration, MarginTop, MarginRight, MarginLeft } from "type-safe-styles";

const mxn1: () => {
  marginLeft: Declaration<MarginLeft>,
  marginRight: Declaration<MarginRight>
} = () => ({
  marginLeft: new Declaration(.5),
  marginRight: new Declaration(.5)
});

// Error: `MarginTop` This type is incompatible with `MarginLeft`
const styles: {
  marginLeft: Declaration<MarginTop>,
  marginRight: Declaration<MarginRight>
} = mxn1();
```

```javascript
// @flow

import { Declaration, ListStyle, PaddingLeft, TextAlign } from "type-safe-styles";

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
