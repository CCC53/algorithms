// https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/
function checkIfPangram(sentence: string): boolean {
    const set = new Set([...sentence]);
    return set.size === 26;
};