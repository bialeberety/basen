import { convertBaseTenToChar, convertCharToBaseTen } from "./baseTen";
import { num } from "./num";
import { ConversionNotation, UNN } from "./types";

export const convertToDec = ({ base, value }: UNN): ConversionNotation => {
	const steps: string[][] = [];
	const result: UNN = { base: 10, value: "0" };

	value
		.split("")
		.reverse()
		.forEach((n, i) => {
			const power = base ** i;
			steps.push([convertCharToBaseTen(n).toString(), "*", power.toString()]);
			result.value = (parseInt(result.value) + convertCharToBaseTen(n) * power).toString();
		});

	return {
		from: { base, value },
		steps,
		result,
	};
};

export const convert = (n: UNN, target: number): ConversionNotation => {
	target = Math.floor(target);
	if (target < 2) return { from: n, steps: [], result: { base: 10, value: "0" } };

	const decConversion = convertToDec(n);
	if (target === 10) return decConversion;

	let decNumber = parseInt(decConversion.result.value);
	const steps: string[][] = decConversion.steps;
	let result = num("", target);

	while (decNumber > 0) {
		const r = decNumber % target;
		steps.push([decNumber.toString(), target.toString(), r.toString()]);
		result.value = convertBaseTenToChar(r) + result.value;
		decNumber = Math.floor(decNumber / target);
	}
	return {
		from: n,
		steps,
		result,
	};
};
