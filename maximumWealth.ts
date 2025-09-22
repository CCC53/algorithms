// https://leetcode.com/problems/richest-customer-wealth/description/

function maximumWealth(accounts: number[][]): number {
    let result = 0;
    for(let i = 0; i < accounts.length; i++) {
        const sum = accounts[i].reduce((p, c) => p+c);
        result = Math.max(result, sum);
    }
    return result;
};