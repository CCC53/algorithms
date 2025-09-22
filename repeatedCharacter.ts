// https://leetcode.com/problems/first-letter-to-appear-twice/

function repeatedCharacter(s: string): string {
    const freqMap = new Map<string, number>();
    for(let i = 0; i < s.length; i++) {
        if(freqMap.has(s[i])) {
            freqMap.set(s[i], freqMap.get(s[i]) + 1);
            if(freqMap.get(s[i]) === 2) {
                return s[i];
            }
        } else {
            freqMap.set(s[i], 1);
        }
    }
};