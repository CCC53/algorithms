// https://leetcode.com/problems/count-the-number-of-consistent-strings/

const countConsistentStrings = (allowed: string, words: string[]): number => {
    const set = new Set(allowed);
    let res = 0;
    for(let i = 0; i < words.length; i++) {
        const wSet = new Set(words[i]);
        if ([...wSet].every(w => set.has(w))) {
            res++;
        }
    }
    return res;
};