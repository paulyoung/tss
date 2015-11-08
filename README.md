# Type-Safe Styles

```javascript
// @flow

import Declaration from "./src/Declaration"
import type { Margin, Padding } from "./src/Properties"

function m0(): Declaration<Margin> {
  return new Declaration(0)
}

// Error: `Margin` This type is incompatible with `Padding`
var padding: Declaration<Padding> = m0()
```
