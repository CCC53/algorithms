// https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
    const map = new Map<number, number>();
    const times = nums.length / 2;
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    for(let [k, v] of map) {
        if(v > times) {
            return k
        }
    }
    return 0;
};