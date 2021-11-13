// Universal Number Notation
export interface UNN {
	base: number;
	value: string;
}

// Represents conversion steps
export interface ConversionNotation {
	from: UNN;
	steps: string[][];
	result: UNN;
}

export const BIN = 2;
export const DEC = 10;
export const OCT = 8;
export const HEX = 16;
