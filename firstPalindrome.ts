// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/

function firstPalindromeFirst(words: string[]): string {
    let res = words.filter(word => word === word.split('').reverse().join(''))[0];
    return res ? res : '';
};

function firstPalindromeSecond(words: string[]): string {
    let res = words.find(word => word === word.split('').reverse().join(''));
    return res ? res : '';
};

function firstPalindromeThird(words: string[]): string {
    return words.find((word: string) => word.split('').every((_, index: number) => word[index] === word[word.length - 1 - index])) ?? "";
};

function firstPalindrome(words: string[]): string {
    const isPalindrome = (word: string): boolean => [...word].reverse().join('') === word;
    for(let i = 0; i < words.length; i++) {
        if(isPalindrome(words[i])) {
            return words[i];
        }
    }
    return "";
};