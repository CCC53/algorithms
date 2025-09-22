// https://leetcode.com/problems/minimum-number-game/description/

function numberGame(nums: number[]): number[] {
    const arr: number[] = [];
    while(nums.length > 0) {
        const alice = Math.min(...nums);
        const idxAlice = nums.indexOf(alice);
        nums.splice(idxAlice, 1);
        // 
        const bob = Math.min(...nums);
        const idxBob = nums.indexOf(bob);
        nums.splice(idxBob, 1);
        // 
        arr.push(bob, alice);
    }
    return arr;
};