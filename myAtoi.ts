// https://leetcode.com/problems/string-to-integer-atoi/

function myAtoi(s: string): number {
    let noSpaces = s.trim();
    let result = "";
    const regex = new RegExp("^[A-Za-z]")
    if(noSpaces.startsWith(".") || regex.test(noSpaces[0])) {
        return 0;
    }
    if(noSpaces.startsWith("-") || noSpaces.startsWith("+") || !isNaN(Number(noSpaces[0]))) {
        result += noSpaces[0];
    }
    for(let i = 1; i < noSpaces.length; i++) {
        if(noSpaces[i] == ".") {
            break;
        }
        if(isNaN(Number(noSpaces[i])) || noSpaces[i] == " ") {
            break;
        }
        result += noSpaces[i]
    }
    const final = isNaN(Number(result)) ? 0 : Number(result);
    return final < Math.pow(-2, 31) ? Math.pow(-2, 31) : final > (2 ** 31) -1 ? (2 ** 31) -1 : final;
}