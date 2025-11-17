// https://leetcode.com/problems/add-strings/?envType=problem-list-v2&envId=math

function addStrings(num1: string, num2: string): string {
    return (BigInt(num1) + BigInt(num2)).toString();
};