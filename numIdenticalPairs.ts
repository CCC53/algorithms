// https://leetcode.com/problems/number-of-good-pairs/description/

function numIdenticalPairsFirst(nums: number[]): number {
    const numsMap = new Map<number, number>();
    let res = 0;
    for(let i=0; i < nums.length; i++) {
        if(numsMap.has(nums[i])) {
            res += numsMap.get(nums[i]);
            numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
        } else {
            numsMap.set(nums[i], 1);
        }
    }
    return res;
};

function numIdenticalPairs(nums: number[]): number {
    let count = 0;
    for (let i=0; i<nums.length; i++) {
      for (let j=i+1; j< nums.length; j++) {
          if (nums[i] === nums[j]) {
              count++;
          }
      }
    }
    return count;
  };