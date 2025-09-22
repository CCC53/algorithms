// https://leetcode.com/problems/reverse-vowels-of-a-string/
function reverseVowels(s: string): string {
    const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const vowels: string[] = [];
    let noVowels = ''; 
    for(let i = 0; i < s.length; i++) {
        if(set.has(s[i])) {
            vowels.push(s[i])
            noVowels += '_';
        } else {
            noVowels += s[i]
        }
    }
    const reversed = vowels.reverse();
    let idxReversed = 0;
    let res = '';
    for(let i = 0; i < noVowels.length; i++) {
        if(noVowels[i] === '_') {
            res +=reversed[idxReversed]
            idxReversed++;
        } else {
            res+=noVowels[i]
        }
    }
    return res;
};