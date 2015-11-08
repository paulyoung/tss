// @flow
// Declaration.js

import type { Property } from "./Property";

class Declaration<Type: Property> {
  value: any;
  constructor(value: any) {
    this.value = value;
  }
}

export default Declaration;
