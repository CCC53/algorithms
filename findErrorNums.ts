// https://leetcode.com/problems/set-mismatch/
function findErrorNums(nums: number[]): number[] {
    const map = new Map<number, number>();
    let missing = -1;
    let dup = -1;
    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for(let i = 1; i <= nums.length; i++) {
        let count = map.get(i);
        if (!count) {
            missing = i;
        } else if (count === 2) {
            dup = i;
        }
    }

    return [dup, missing];
};