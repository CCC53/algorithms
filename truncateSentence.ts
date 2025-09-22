// https://leetcode.com/problems/truncate-sentence/description/

function truncateSentence(s: string, k: number): string {
    const arr = s.split(' ').slice(0,k);
    return arr.join(' ');
};