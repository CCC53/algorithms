// https://leetcode.com/problems/number-of-valid-words-in-a-sentence/?envType=problem-list-v2&envId=string

function countValidWords(sentence: string): number {
    const pattern = /^[a-z]+(-[a-z]+)?[!.,]?$|^[!.,]$/;
    const splitted = sentence.split(/\s+/);
    const valid = splitted.reduce((c, w) => pattern.test(w) ? c + 1 : c, 0);
    return valid;
};