// https://leetcode.com/problems/fizz-buzz/description/?envType=problem-list-v2&envId=string

function fizzBuzz(n: number): string[] {
    const res: string[] = [];
    for(let i = 1; i <= n; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
            res.push("FizzBuzz");
        } else if(i % 3 === 0) {
            res.push("Fizz")
        } else if (i % 5 === 0) {
            res.push("Buzz")
        } else {
            res.push(i.toString());
        }
    }
    return res;
};