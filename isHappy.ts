// https://leetcode.com/problems/happy-number/description/?envType=problem-list-v2&envId=hash-table

// My solution
function isHappyBad(n: number): boolean {
    let nums = [...n.toString()].map(n => Number(n));
    if (nums.length === 1) {
        const aux = Math.pow(nums[0], 2);
        nums = [...aux.toString()].map(n => Number(n));
    }
    let count = 0;
    while(count < 1000) {
        let sum = 0;
        for(let i = 0; i < nums.length; i++) {
            console.log(nums[i])
            sum += Math.pow(nums[i], 2)
        }
        if (sum === 1) {
            return true;
        }
        nums = [...sum.toString()].map(n => Number(n));
        count++;
    }
    return false;
};

// The best solution
function isHappy(n: number): boolean {
    while (n > 9) {
        let sum = 0;
        while (n > 0) {
            let digit = n % 10;
            sum += (digit ** 2);
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    return n === 1 || n === 7;
};