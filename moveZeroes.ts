// https://leetcode.com/problems/move-zeroes/description/

function moveZeroesMine(nums: number[]): void {
    const zeroes: number[] = nums.filter(n => n === 0);
    const nonZeroes: number[] = nums.filter(n => n !== 0);
    nums.splice(0, nums.length);
    nums.push(...nonZeroes);
    nums.push(...zeroes);
};

function moveZeroes(nums: number[]): void {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            count += 1
            i -= 1
        }
    }

    for (let i = 0; i < count; i++) {
        nums.push(0)
    }
};