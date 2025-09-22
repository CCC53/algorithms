// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

function smallerNumbersThanCurrent(nums: number[]): number[] {
    const map = new Map<number, number>();
    const res: number[] = [];
    const sorted = [...nums].sort((a,b) => a - b);
    for(let i = 0; i < sorted.length; i++) {
        if (!map.has(sorted[i])) {
            map.set(sorted[i], i);
        }
    }
    for(let i = 0; i < nums.length; i++) {
        res.push(map.get(nums[i]))
    }
    return res;
};