// https://leetcode.com/problems/remove-element/description/

function removeElementFirst(nums: number[], val: number): number {
    const newData = nums.filter(n => n !== val);
    nums.sort((a,b) => b === val ? -1 : 0);
    return newData.length;
};

function removeElementSecond(nums: number[], val: number): number {
    const newData = nums.filter(n => n !== val);
    nums.splice(0, nums.length);
    nums.push(...newData);
    return newData.length;
};

function removeElement(nums: number[], val: number): number {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};