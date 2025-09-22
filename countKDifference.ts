// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/?envType=problem-list-v2&envId=hash-table

function countKDifference(nums: number[], k: number): number {
  const countMap = new Map<number, number>();
  
  let result = 0;
  for (const num of nums) {
    const plusCount = countMap.get(num + k) ?? 0;
    const minusCount = countMap.get(num - k) ?? 0;
    if (plusCount || minusCount) {
      result += plusCount + minusCount;
    }
    const count = countMap.get(num) ?? 0;
    countMap.set(num, count + 1);
  }
  return result;
};