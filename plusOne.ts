// https://leetcode.com/problems/plus-one/description/

function plusOneFirst(digits: number[]): number[] {
    const joined = BigInt(digits.join("")) + BigInt(1);
    return [...joined+''].map(n => +n);
};

function plusOne(digits: number[]): number[] {
    let quantity = BigInt(digits.map(String).join(''));
    quantity++;
    const arr = [...quantity.toString()].map(Number);
    return arr;
};