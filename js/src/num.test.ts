import { num } from "./num";
import { BIN, DEC, HEX, OCT } from "./types";

describe("Creation of number object", () => {
	test("Create Binary UNN", () => {
		expect(num("1010", BIN)).toMatchObject({ base: 2, value: "1010" });
	});

	test("Create Oct UNN", () => {
		expect(num("1357", OCT)).toMatchObject({ base: 8, value: "1357" });
	});

	test("Create Dec UNN", () => {
		expect(num(269, DEC)).toMatchObject({ base: 10, value: "269" });
	});

	test("Create Hex UNN", () => {
		expect(num("2AF", HEX)).toMatchObject({ base: 16, value: "2AF" });
	});
});
