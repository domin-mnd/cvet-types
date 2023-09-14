/** A type for enumerating an integer. */
type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

/** A type for finding a range of integers. */
type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>, // A range starting point
  Enumerate<F> // A range ending point, excluding the starting point
>;

/** 10-15 Hexadecimal letters. */
type HexadecimalLetters = "A" | "B" | "C" | "D" | "E" | "F";

/** 0-100% amount used in filters. */
export type Amount = IntRange<0, 101>;
/** 0-360 degrees. */
export type Degrees = IntRange<0, 361>;
/** 0-255 values for RGB, HEX. */
export type Hexadecimal = IntRange<0, 256>;
/** HEX characters as for Hexadecimal value. */
export type HexChar =
  | `${IntRange<0, 10>}`
  | Uppercase<HexadecimalLetters>
  | Lowercase<HexadecimalLetters>;
