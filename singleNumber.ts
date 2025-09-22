// https://leetcode.com/problems/single-number/description/

function singleNumberFirst(nums: number[]): number {
    let res = nums[0];
    const set = new Set(nums);
    set.forEach(item => {
        if (nums.lastIndexOf(item) - nums.indexOf(item) === 0) {
            res = item;
        }
    })
    return res;
};

function singleNumber(nums: number[]): number {
    const freqMap = new Map<number, number>();
    if(nums.length === 1) {
        return nums[0];
    }
    for(let i = 0; i < nums.length; i++) {
        if(freqMap.has(nums[i])) {
            freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
        } else {
            freqMap.set(nums[i], 1);
        }
    }
    let result = 0;
    for(const [k, v] of freqMap) {
        if(v === 1) {
            result = k;
            break;
        }
    }
    return result;
};