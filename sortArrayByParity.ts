// https://leetcode.com/problems/sort-array-by-parity/description/

function sortArrayByParity(nums: number[]): number[] {
    return nums.sort((a,b) => (a%2) - (b%2));
};