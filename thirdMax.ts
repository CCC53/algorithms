// https://leetcode.com/problems/third-maximum-number/
function thirdMax(nums: number[]): number {
    const set = new Set(nums);
    let max = Math.max(...nums)
    if (set.size < 3) {
        return max;
    }
    for(let i = 0; i < 2; i++) {
        if (set.has(max)) {
            set.delete(max);
            max = Math.max(...set)
        }
    }
    return max;
};