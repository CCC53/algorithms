// https://leetcode.com/problems/jewels-and-stones/description/

function numJewelsInStonesFirst(jewels: string, stones: string): number {
    const freqMap = new Map<string, number>();
    let res = 0;
    for(let i=0; i < jewels.length; i++) {
        freqMap.set(jewels[i], i);
    }
    for(let j=0; j < stones.length; j++) {
        if (freqMap.has(stones[j])) {
            res++;
        }
    }
    return res;
};

function numJewelsInStones(jewels: string, stones: string): number {
    const jewelsArr = [...jewels]
    let result = 0;
    for(let i = 0; i < stones.length; i++) {
        if(jewelsArr.includes(stones[i])) {
            result++;
        }
    }
    return result;
};