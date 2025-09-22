// https://leetcode.com/problems/smallest-range-i/

function smallestRangeI(nums: number[], k: number): number {
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    const adMin = min + k;
    const adMax = max - k;
    return Math.abs(Math.min(0, adMin - adMax));
};