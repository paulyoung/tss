// @flow
// transform.js

import type { Declaration } from "./Declaration";
import type { Property } from "./Property";

export const transform: <Type: Property>(styles: {
  [key: string]: Declaration<Type>
}) => {
  [key: string]: Declaration<Type>
} = (styles) => {
  return Object.keys(styles)
    .reduce((accumulator, key) => {
      accumulator[key] = styles[key].value;
      return accumulator;
    }, {});
};
