// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

const repeatedNTimes = (nums: number[]): number => {
    const n = nums.length / 2;
    const mapFreq = new Map<number, number>();
    for(let i = 0; i < nums.length; i++) {
        if(mapFreq.has(nums[i])) {
            mapFreq.set(nums[i], mapFreq.get(nums[i]) + 1);
        } else {
            mapFreq.set(nums[i], 1);
        }
    }
    for(let item of mapFreq) {
        if(item[1] === n) {
            return item[0];
        }
    }
};