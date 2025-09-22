// https://leetcode.com/problems/fraction-to-recurring-decimal/

function fractionToDecimal(numerator: number, denominator: number): string {
    const map = new Map<number, number>();
    let result = "";
    if(numerator === 0) {
        return "0";
    }
    if(Math.sign(numerator) !== Math.sign(denominator)) {
        result += "-";
    }
    let remainder = Math.abs(numerator) % Math.abs(denominator);
    result += Math.floor(Math.abs(numerator) / Math.abs(denominator));
    if(remainder === 0) {
        return result;
    }
    result += ".";
    while(remainder !== 0) {
        if(map.has(remainder)) {
            const index = map.get(remainder);
            result = result.slice(0, index) + "(" + result.slice(index) + ")";
            break;
        }
        map.set(remainder, result.length);
        remainder *= 10;
        result += Math.floor(remainder / Math.abs(denominator));
        remainder %= Math.abs(denominator);
    }
    return result;
};