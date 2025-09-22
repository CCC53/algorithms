// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
function findDisappearedNumbers(nums: number[]): number[] {
    const res: number[] = [];
    const map = new Map<number, number>();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1)
        }
    }
    for(let i = 1; i <= nums.length; i++) {
        if(!map.has(i)) {
            res.push(i);
        }
    }
    return res;
};