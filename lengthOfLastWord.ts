// https://leetcode.com/problems/length-of-last-word/description/

function lengthOfLastWordFirst(s: string): number {
    s = s.trim();
    const subStrings = s.split(' ');
    return subStrings[subStrings.length-1].length;
};

function lengthOfLastWord(s: string): number {
    const splited = s.split(' ').filter(i => i != '');
    return splited[splited.length-1].length;
};