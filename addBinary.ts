// https://leetcode.com/problems/add-binary/description

const addBinaryFirst = (a: string, b: string): string => (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);

function addBinary(a: string, b: string): string {
    const getBinaryDecimal = (bin: string): string => {
        let decimal = BigInt(0);
        let pow = bin.length-1;
        for(let i = 0; i < bin.length; i++) {
            if(bin[i] === '1') {
                decimal += BigInt(1) << BigInt(pow);
            }
            pow--;
        }
        return decimal.toString();
    }
    const aDecimal = BigInt(getBinaryDecimal(a));
    const bDecimal = BigInt(getBinaryDecimal(b));
    const result = aDecimal + bDecimal;
    return result.toString(2);
};