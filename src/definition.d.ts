import type { HEX, RGB, HSL, CMYK } from "./models";

/** Names of a color type */
export type ColorType = "HEX" | "RGB" | "HSL" | "CMYK" | "MAP";
/** Any color type */
export type Color = HEX | RGB | HSL | CMYK | ColorMap;
/** A mapped color from the Palette */
export type ColorMap = RGB;
