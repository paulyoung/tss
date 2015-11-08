# Type-Safe Styles

```javascript
// @flow

import Declaration from "./src/Declaration";
import type { Margin, Padding } from "./src/Properties";

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

import Declaration from "./src/Declaration";
import type { MarginTop, MarginRight, MarginLeft } from "./src/Properties";

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

import Declaration from "./src/Declaration";
import type { ListStyle, PaddingLeft, TextAlign } from "./src/Properties";

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
