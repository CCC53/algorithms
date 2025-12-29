// https://leetcode.com/problems/find-the-duplicate-number/

function findDuplicateBad(nums: number[]): number {
    const mapFreq = new Map<number, number>();
    const set = new Set(nums);
    if (set.size === 1) {
        return nums[0];
    }
    for(let n of nums) {
        if (mapFreq.has(n)) {
            mapFreq.set(n, mapFreq.get(n) + 1);
        } else {
            mapFreq.set(n, 1);
        }
    }
    for(let [key, value] of mapFreq) {
        if (value >= 2) {
            return key;
        }
    }
};

function findDuplicate(nums: number[]): number {
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
}