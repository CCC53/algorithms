// https://leetcode.com/problems/find-the-duplicate-number/

function findDuplicate(nums: number[]): number {
    const mapFreq = new Map<number, number>();
    const set = new Set(nums);
    if (set.size === 1) {
        return nums[0];
    }
    for(let n of nums) {
        if (mapFreq.has(n)) {
            mapFreq.set(n, mapFreq.get(n) + 1);
        } else {
            mapFreq.set(n, 1);
        }
    }
    for(let [key, value] of mapFreq) {
        if (value >= 2) {
            return key;
        }
    }
};