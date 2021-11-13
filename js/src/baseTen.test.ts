import { convertBaseTenToChar, convertCharToBaseTen } from "./baseTen";

describe("Conversion to and from base 10 chars", () => {
	test("From base 10 to char", () => {
		expect(convertBaseTenToChar(10)).toBe("A");
	});
	test("From char to base 10", () => {
		expect(convertCharToBaseTen("B")).toBe(11);
	});
});
