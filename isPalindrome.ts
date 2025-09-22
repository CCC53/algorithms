// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
    const modified = s.toLowerCase().replace(/[\W\s\_]/g, '')
    return [...modified].reverse().join('') === modified
};