import type { Hexadecimal } from "./enumerates";

/**
 * A safe type for a HEX color.
 * @see {@link https://stackoverflow.com/questions/68766792 There's no way to make a standalone HEX type}
 */
export type HEX = `#${string}`; // #000000 ~ #FFFFFF

/**
 * A HEX model namespace to manage safe & unsafe values.
 *
 * @example
 * const okHex: HEX = "#ff00FF";
 * const anotherOkHex: HEX.Safe = "#ff00FF";
 * const dangerousHex: HEX.Unsafe = "WRONGHEX";
 */
export namespace HEX {
  /**
   * A safe type for a HEX color.
   * @see {@link https://stackoverflow.com/questions/68766792 There's no way to make a standalone HEX type}
   */
  type Safe = HEX;
  /** An unsafe type for a HEX color. */
  type Unsafe = HEX | string;
}

/** An object with r, g, b keys representing RGB color. */
export interface RGB {
  /** Red color value, 0-255. */
  r: Hexadecimal;
  /** Green color value, 0-255. */
  g: Hexadecimal;
  /** Blue color value, 0-255. */
  b: Hexadecimal;
}

/** An object with r, g, b, a keys representing RGBA color. */
export interface RGBA extends RGB {
  /** Alpha channel value. */
  a: number;
}

/**
 * An RGB model namespace to manage safe & unsafe values of an object.
 *
 * @example
 * const okRgb: RGB = {
 *   r: 0,
 *   g: 138,
 *   b: 255,
 * };
 * const anotherOkRgb: RGB.Safe = {
 *   r: 0,
 *   g: 138,
 *   b: 255,
 * };
 * const dangerousRgb: RGB.Unsafe = {
 *   r: 97**9999,
 *   g: -123,
 *   b: 987,
 * };
 */
export namespace RGB {
  /** An object with r, g, b keys representing RGB color. */
  type Safe = RGB;
  /** An unsafe object with r, g, b keys representing RGB color. */
  interface Unsafe {
    /** Red color value, any number. */
    r: number;
    /** Green color value, any number. */
    g: number;
    /** Blue color value, any number. */
    b: number;
  }
}

/**
 * An RGBA model namespace to manage safe & unsafe values of an object.
 *
 * @example
 * const okRgb: RGBA = {
 *   r: 0,
 *   g: 138,
 *   b: 255,
 *   a: 5,
 * };
 * const anotherOkRgb: RGBA.Safe = {
 *   r: 0,
 *   g: 138,
 *   b: 255,
 *   a: 5,
 * };
 * const dangerousRgb: RGBA.Unsafe = {
 *   r: 97**9999,
 *   g: -123,
 *   b: 987,
 *   a: 5,
 * };
 */
export namespace RGBA {
  /** An object with r, g, b, a keys representing RGBA color. */
  type Safe = RGBA;
  /** An unsafe object with r, g, b, a keys representing RGBA color. */
  interface Unsafe {
    /** Red color value, any number. */
    r: number;
    /** Green color value, any number. */
    g: number;
    /** Blue color value, any number. */
    b: number;
    /** Alpha channel value. */
    a: number;
  }
}

/** An object with h, s, l keys representing HSL color. */
export interface HSL {
  /** Hue color value. */
  h: number;
  /** Saturation color value. */
  s: number;
  /** Lightness color value. */
  l: number;
}

/** An object with h, s, l, a keys representing HSLA color. */
export interface HSLA extends HSL {
  /** Alpha channel value. */
  a: number;
}

/** An object with c, m, y, k keys representing CMYK color. */
export interface CMYK {
  /** Cyan color value. */
  c: number;
  /** Magenta color value. */
  m: number;
  /** Yellow color value. */
  y: number;
  /** Black color value. */
  k: number;
}
