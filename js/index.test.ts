import { convertToDec, num, HEX, convert } from "./dist/lib";

console.log(convertToDec(num("DBC", HEX)));
console.log(convert(num("DBC", HEX), 2));
