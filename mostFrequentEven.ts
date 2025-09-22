// https://leetcode.com/problems/most-frequent-even-element/

function mostFrequentEven(nums: number[]): number {
    const map = new Map<number,number>();
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            if(map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1);
            } else {
                map.set(nums[i], 1);
            }
        }
    }
    const maxFreq = Math.max(...map.values());
    const keysArr: number[] = [];
    for(const [k,v] of map) {
        if (v === maxFreq) {
            keysArr.push(k)
        }
    }
    return map.size === 0 ? -1 : Math.min(...keysArr);
};