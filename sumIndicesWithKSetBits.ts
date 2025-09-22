// https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/description/

function sumIndicesWithKSetBitsFirst(nums: number[], k: number): number {
    let res = 0;
    for(let i=0; i < nums.length; i++) {
        let idxB = i.toString(2).match(/1/g)?.map(n => +n).reduce((p, c) => p+c);
        if (idxB) {
            idxB === k && (res += nums[i] )
        }
    }
    return k === 0 ? nums[0] : res;
};

function sumIndicesWithKSetBits(nums: number[], k: number): number {
    const hasKBits = (num: number): boolean => {
        const onlyOnes = [...num.toString(2)].filter(n => n === '1');
        return onlyOnes.length === k;
    }
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        if(hasKBits(i)) {
            result += nums[i];
        }
    }
    return result;
};