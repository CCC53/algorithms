// https://leetcode.com/problems/concatenation-of-array/description/

function getConcatenationFirst(nums: number[]): number[] {
    return [...nums, ...nums];
};

function getConcatenationSecond(nums: number[]): number[] {
    const ans = [...nums];
    return [...ans, ...nums];
};

function getConcatenation(nums: number[]): number[] {
    return nums.concat(nums);
};