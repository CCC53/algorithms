// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/
function areNumbersAscending(s: string): boolean {
    const nums = s.split(' ').filter(i => /\d/.test(i)).map(n => Number(n));
    let p = nums[0];
    let n = 1;
    let res = true;
    while(n < nums.length) {
        if (p >= nums[n]) {
            return false;
        }
        p = nums[n];
        n++;
    }
    return res;
};