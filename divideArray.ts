// https://leetcode.com/problems/divide-array-into-equal-pairs/description/?envType=problem-list-v2&envId=hash-table

// My original solution
function divideArrayFirst(nums: number[]): boolean {
    const freqMap = new Map<number, number>();
    let validPair = 0;
    for(let i = 0; i < nums.length; i++) {
        if(freqMap.has(nums[i])) {
            freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
        } else {
            freqMap.set(nums[i], 1);
        }
    }
    for(const [k, v] of freqMap) {
        if(v > 2) {
            for(let i = 1; i <= v; i++) {
                i % 2 === 0 && validPair++;
            }
        } else {
            v === 2 && validPair++;
        }
    }
    return validPair === (nums.length / 2);
};

// Other solution
function divideArray(nums: number[]): boolean {
    const freqMap = new Map<number, number>();
    for(let i = 0; i < nums.length; i++) {
        if(freqMap.has(nums[i])) {
            freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
        } else {
            freqMap.set(nums[i], 1);
        }
    }
    for(const [k, v] of freqMap) {
        if(v % 2 !== 0) {
            return false;
        }
    }
    return true;
};