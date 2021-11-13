import { convertToDec, convert } from "./convert";
import { num } from "./num";

describe("Conversion between diffrent number systems", () => {
	test("From Binary to Dec (using convertToDec)", () => {
		expect(convertToDec(num("111", 2)).result).toMatchObject({ base: 10, value: "7" });
		expect(convertToDec(num("111", 2)).from).toMatchObject({ base: 2, value: "111" });
		expect(convertToDec(num("111", 2)).steps.length).toBe(3);
	});

	test("From Hex to Dec (using convertToDec)", () => {
		expect(convertToDec(num("AB", 16)).result).toMatchObject({ base: 10, value: "171" });
		expect(convertToDec(num("AB", 16)).from).toMatchObject({ base: 16, value: "AB" });
		expect(convertToDec(num("AB", 16)).steps.length).toBe(2);
	});

	test("From Bin to Hex", () => {
		expect(convert(num("100101101", 2), 16).result).toMatchObject({ base: 16, value: "12D" });
		expect(convert(num("100101101", 2), 16).from).toMatchObject({ base: 2, value: "100101101" });
		expect(convert(num("100101101", 2), 16).steps.length).toBe(3);
	});

	test("From Hex to Bin", () => {
		expect(convert(num("F10", 16), 2).result).toMatchObject({ base: 2, value: "111100010000" });
		expect(convert(num("F10", 16), 2).from).toMatchObject({ base: 16, value: "F10" });
		expect(convert(num("F10", 16), 2).steps.length).toBe(12);
	});

	test("From Dec to Bin", () => {
		expect(convert(num(21), 2).result).toMatchObject({ base: 2, value: "10101" });
		expect(convert(num(21), 2).from).toMatchObject({ base: 10, value: "21" });
		expect(convert(num(21), 2).steps.length).toBe(5);
	});
});
