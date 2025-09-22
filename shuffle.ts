// https://leetcode.com/problems/shuffle-the-array/description/

function shuffleFirst(nums: number[], n: number): number[] {
    let result : number[] = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[n + i]);
    }

    return result;
};

function shuffle(nums: number[], n: number): number[] {
    let next = 0;
    const result: number[] = [];
    for(let i = n; i < nums.length; i++) {
        result.push(nums[next]);
        result.push(nums[i]);
        next++;
    }
    return result;
};