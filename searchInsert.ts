// https://leetcode.com/problems/search-insert-position/description/

function searchInsertFirst(nums: number[], target: number): number {
    if (!nums.includes(target)) {
       nums.push(target);
       nums.sort((a, b) => a > b ? 1 : -1); 
    }
    return nums.indexOf(target);
};

function searchInsert(nums: number[], target: number): number {
    const idx = nums.indexOf(target);
    if(idx < 0) {
        nums.push(target);
        nums.sort((a,b) => a-b);
        return nums.indexOf(target);
    }
    return idx;
};