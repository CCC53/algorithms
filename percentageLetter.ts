// https://leetcode.com/problems/percentage-of-letter-in-string/description/?envType=problem-list-v2&envId=string
function percentageLetter(s: string, letter: string): number {
    const countLetter  = [...s].filter(l => l === letter).length;
    if(countLetter === 0) {
        return 0;
    }
    return Math.trunc((countLetter / s.length) * 100);
};