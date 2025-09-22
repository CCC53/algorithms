// https://leetcode.com/problems/smallest-index-with-equal-value/

function smallestEqualFirst(nums: number[]): number {
    const indexes: number[] = [];
    for(let i=0; i < nums.length; i++) {
        i % 10 === nums[i] && indexes.push(i);
    }
    return indexes.length === 0 ? -1 : Math.min(...indexes);
};

function smallestEqual(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
      if (i % 10 == nums[i]) {
        return i
      }
    }
    return -1
  }