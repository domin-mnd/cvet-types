import type { HEX, RGB, HSL, CMYK, RGBA, HSLA } from "./models";

/** Names of a color type. */
export type ColorType = "HEX" | "RGB" | "RGBA" | "HSL" | "HSLA" | "CMYK" | "MAP";
/** Any color type. */
export type Color = HEX | RGB | RGBA | HSL | HSLA | CMYK | ColorMap;
/** A mapped color from the Palette. */
export type ColorMap = RGB | RGBA;
