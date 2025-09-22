// https://leetcode.com/problems/contains-duplicate/description/

// 
function containsDuplicateFirst(nums: number[]): boolean {
    const set = new Set(nums);
    return set.size !== nums.length;
};

// 
function containsDuplicateSecond(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
};

// 
function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>();
    for(let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }
    return false;
};