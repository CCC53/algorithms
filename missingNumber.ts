// https://leetcode.com/problems/missing-number/

const missingNumber = (nums: number[]): number => {
    const set = new Set(nums);
    const max = Math.max(...nums);
    if(max !== nums.length) {
        return nums.length;
    }
    for(let i = 0; i < nums.length; i++) {
        if(!set.has(i)) {
            return i;
        }
    }
};