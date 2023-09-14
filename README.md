<p align="center">
  <img alt="cvet" src="public/cvet.svg" width="100" />
</p>

# Overview

Cvet (Russian word for "color", pronounced `/tsvet/`) is a color tool for
customizing and picking colors easily for your projects. This package
includes various types for typescript-friendly development.

# Install

```bash
$ npm install -D @cvet/types typescript
$ yarn add --dev @cvet/types typescript
```

# Usage

To work with types that this package offers you can either use [`cvet`](https://www.npmjs.com/package/cvet)
package that has following types imported or install this package for the use without the tool:

```ts
import type { HEX } from "cvet/types"; // with tool usage
import type { HEX } from "@cvet/types"; // with package usage

const color: HEX = "#FF0000";
```

## Types

Package offers various types for most of the color models: `HEX`, `RGB`, `CMYK`, `HSL`.

With these you can define colors like:

```ts
const myHEX: HEX = "#FF0000";
const mySafeHEX: SafeHEX = "#FF0000"; // Is a verbose equivalent to HEX type
const myUnsafeHEX: UnsafeHEX = "#BADHEX"; // Accepts any string

const amazingRGB: RGB = { r: 255, g: 0, b: 0 };
const notSoAmazingRGB: RGB = { r: 256, g: 0, b: 0 }; // Error, only 0-255
const safeRGB: SafeRGB = { r: 255, g: 0, b: 0 }; // Is a verbose equivalent to RGB type
const weirdRGB: UnsafeRGB = { r: 299, g: 989, b: 0 }; // Accepts any numbers


const myCMYK: CMYK = { c: 0, m: 100, y: 100, k: 0 };
const myWeirdCMYK: CMYK = { c: 0, m: 1, y: 1, k: 0 };
// Won't return error because the type is number,
// CMYK can be 0-1, 0-100 or any other format,
// depends on its usage in other packages

const HSL: HSL = { h: 120, s: 100, l: 50 };
const differentHSL: HSL = { h: 0.33, s: 1, l: 0.5 };
// Acts the same as CMYK as HSL has different
// usage cases
```

Also there are enumerated units such as `Amount`, `Degrees`, `Hexadecimal`, `HexChar`:
- `Amount` accepts numbers 0-100 
- `Degrees` accepts numbers 0-360 
- `Hexadecimal` accepts numbers 0-255 
- `HexChar` accepts 0-F string characters as presented in HEX color model

> **Note**: `HexChar` isn't used in safe HEX type, see [this stackoverflow question](https://stackoverflow.com/questions/68766792) to know why.

## Color models

Of course I'd want to include various types for defining color models: `ColorType`, `Color`, `ColorMap`:
- `ColorType` holds names of color models supported by cvet: "HEX" | "RGB" | "HSL" | "CMYK" | "MAP"
- `Color` enumerates all of the color models listed above so that it accepts them: HEX | RGB | HSL | CMYK | ColorMap
- `ColorMap` is used as the recommendation for the standalone color model - RGB, use it for conversion

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# License

This project is under [MIT](https://choosealicense.com/licenses/mit/) license. You can freely use it for your own purposes.