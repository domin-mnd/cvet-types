import type { Hexadecimal } from "./enumerates";

/**
 * A safe type for a HEX color
 * @see {@link https://stackoverflow.com/questions/68766792 There's no way to make a standalone HEX type}
 */
export type HEX = `#${string}`; // #000000 ~ #FFFFFF
/**
 * A safe type for a HEX color
 * @see {@link https://stackoverflow.com/questions/68766792 There's no way to make a standalone HEX type}
 */
export type SafeHEX = HEX;
/** An unsafe type for a HEX color */
export type UnsafeHEX = HEX | string;

/** An object with r, g, b keys representing RGB color */
export interface RGB {
  /** Red color value, 0-255 */
  r: Hexadecimal;
  /** Green color value, 0-255 */
  g: Hexadecimal;
  /** Blue color value, 0-255 */
  b: Hexadecimal;
}

/** An object with r, g, b keys representing RGB color */
export type SafeRGB = RGB;

/** An unsafe object with r, g, b keys representing RGB color */
export interface UnsafeRGB {
  /** Red color value, any number */
  r: number;
  /** Green color value, any number */
  g: number;
  /** Blue color value, any number */
  b: number;
}

/** An object with h, s, l keys representing HSL color */
export interface HSL {
  /** Hue color value */
  h: number;
  /** Saturation color value */
  s: number;
  /** Lightness color value */
  l: number;
}

/** An object with c, m, y, k keys representing CMYK color */
export interface CMYK {
  /** Cyan color value */
  c: number;
  /** Magenta color value */
  m: number;
  /** Yellow color value */
  y: number;
  /** Black color value */
  k: number;
}
