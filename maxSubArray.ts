// https://leetcode.com/problems/maximum-subarray/
function maxSubArray(A: number[]): number {
  if (A.length === 0) {
    return 0;
  }

  let currentSum = A[0];
  let maxSum = A[0];

  for (let i = 1; i < A.length; i++) {
    currentSum = Math.max(A[i], currentSum + A[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}