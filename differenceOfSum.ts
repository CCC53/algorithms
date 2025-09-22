// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/

function differenceOfSumFirst(nums: number[]): number {
    const elsum = nums.reduce((p, c) => p+c);
    let digSum = 0;
    nums.forEach(num => {
        while(num) {
            digSum += num % 10;
            num = Math.floor(num/10)
        }
    });
    return Math.abs(elsum - digSum);
};

function differenceOfSum(nums: number[]): number {
    const getSumDigitsNumber = (n: number): number => {
        let sum = 0;
        while(n > 0) {
            let digit = n % 10;
            sum += digit;
            n = Math.floor(n / 10);
        }
        return sum;
    }
    const sum = nums.reduce((p, c) => p+c);
    let digitSum = 0;
    for(let i = 0; i < nums.length; i++) {
        digitSum += getSumDigitsNumber(nums[i]);
    }
    return Math.abs(sum - digitSum);
};