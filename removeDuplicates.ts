// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
    const map = new Map<number, number>();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])+1);
        } else {
            map.set(nums[i], 1);
        }
    }
    map.forEach((v, k) => {
        if(v > 1) {
            const indexes = nums.filter(i => i === k).length-1;
            nums.splice(nums.indexOf(k), indexes);
        }
    });
    return nums.length
};