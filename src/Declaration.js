// @flow
// Declaration.js

import type { Property } from "./Property";

export class Declaration<Type: Property> {
  value: any;
  constructor(value: any) {
    this.value = value;
  }
}
