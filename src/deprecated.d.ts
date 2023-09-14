import type { HEX, RGB } from "./models";

/**
 * A safe type for a HEX color. Only exists for backwards compatibility.
 * @deprecated Use HEX namespace instead e.g. `HEX.Safe`.
 * @see {@link https://stackoverflow.com/questions/68766792 There's no way to make a standalone HEX type}
 */
export type SafeHEX = HEX;
/**
 * An unsafe type for a HEX color. Only exists for backwards compatibility.
 * @deprecated Use HEX namespace instead e.g. `HEX.Unsafe`.
 */
export type UnsafeHEX = HEX | string;

/**
 * An object with r, g, b keys representing RGB color. Only exists for backwards compatibility.
 * @deprecated Use RGB namespace instead e.g. `RGB.Safe`.
 */
export type SafeRGB = RGB;

/**
 * An unsafe object with r, g, b keys representing RGB color. Only exists for backwards compatibility.
 * @deprecated Use RGB namespace instead e.g. `RGB.Unsafe`.
 */
export interface UnsafeRGB {
  /** Red color value, any number. */
  r: number;
  /** Green color value, any number. */
  g: number;
  /** Blue color value, any number. */
  b: number;
}
