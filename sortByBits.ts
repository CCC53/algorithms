// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/description/

function sortByBitsFirst(arr: number[]): number[] {
    return arr.sort((p, c) => {
        const pB = p.toString(2).split('').filter(n => n === '1').length;
        const cB = c.toString(2).split('').filter(n => n === '1').length;
        return pB === cB ? p-c : pB -cB;
    });
};

function sortByBits(arr: number[]): number[] {
    return arr.sort((a, b) => {
        const aBits = [...a.toString(2)].filter(n => n === '1').length;
        const bBits = [...b.toString(2)].filter(n => n === '1').length;
        if(aBits === bBits) {
            return a - b;
        }
        return aBits - bBits;
    })
};