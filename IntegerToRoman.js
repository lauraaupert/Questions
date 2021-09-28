// Integer to Roman

function intToRoman(num) {
    let result = "";
    let romans = new Map;

    romans.set("M", 1000);
    romans.set("CM", 900);
	romans.set("D", 500);
	romans.set("CD", 400);
	romans.set("C", 100);
	romans.set("XC", 90);
	romans.set("L", 50);
	romans.set("XL", 40);
	romans.set("X", 10);
	romans.set("IX", 9);
	romans.set("V", 5);
	romans.set("IV", 4);
    romans.set("I", 1);
    
    for (const roman of romans.keys) {
        let romanValue = romans.get(roman);
        while (num >= romanValue) {
            result += roman;
            num -= romanValue;
        }
    }

    return result;

}