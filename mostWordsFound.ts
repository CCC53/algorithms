// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

function mostWordsFound(sentences: string[]): number {
    let result = 0;
    for(let i = 0; i < sentences.length; i++) {
        const wordsCount = sentences[i].split(' ').length;
        result = Math.max(result, wordsCount);
    }
    return result;
};