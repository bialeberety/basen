import { UNN } from "./types";

export const num = (n: string | number, base: number = 10): UNN => ({
	base: Math.floor(base),
	value: n.toString(),
});
