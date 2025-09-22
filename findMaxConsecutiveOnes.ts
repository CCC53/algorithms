// https://leetcode.com/problems/max-consecutive-ones/description/?envType=problem-list-v2&envId=array

function findMaxConsecutiveOnesMine(nums: number[]): number {
    const onlyOnes = nums.join('').split('0');
    const lengths = onlyOnes.map(item => item.length);
    return Math.max(...lengths);
};

function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0;
    let current = 0;
    for (const num of nums) {
        current = num === 0 ? 0 : current + 1;
        max = Math.max(current, max);
    }

    return max;
};