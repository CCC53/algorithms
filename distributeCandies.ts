// https://leetcode.com/problems/distribute-candies/description/?envType=problem-list-v2&envId=array
function distributeCandies(candyType: number[]): number {
    const set = new Set(candyType);
    const half = candyType.length/2;
    return set.size >= half ? half : set.size;
};