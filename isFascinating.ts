// https://leetcode.com/problems/check-if-the-number-is-fascinating/
function isFascinating(n: number): boolean {
    let string = n.toString();
    for(let i = 2; i <= 3; i++) {
        string += (n * i).toString();
    }
    if(string.includes('0')) {
        return false;
    }
    const freqMap = new Map<string, number>();
    for(let i = 0; i < string.length; i++) {
        if(freqMap.has(string[i])) {
            freqMap.set(string[i], freqMap.get(string[i]) + 1);
            if(freqMap.get(string[i]) === 2) {
                return false;
            }
        } else {
            freqMap.set(string[i], 1);
        }
    }
    return true;
};