// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/1561829180/

function kidsWithCandiesFirst(candies: number[], extraCandies: number): boolean[] {
    const greatest = candies.reduce((p,c) => p > c ? p : c);
    return candies.map((candy) => candy+extraCandies >= greatest ? true : false)
};

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = Math.max(...candies);
    return candies.map(c => c+extraCandies >= max);
};