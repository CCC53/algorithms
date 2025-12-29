// https://leetcode.com/problems/number-of-arithmetic-triplets/description/

function arithmeticTriplets(nums: number[], diff: number): number {
    let set = new Set(nums);
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i] + diff) && set.has(nums[i] + 2 * diff)) {
            result++;
        }
    }
    return result;
};