// https://leetcode.com/problems/two-out-of-three/
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    const set1 = new Set(nums1);
    const setRes = new Set<number>();
    for(let i = 0; i < nums2.length; i++) {
        if(set1.has(nums2[i])) {
            setRes.add(nums2[i]);
        }
    }
    const set2 = new Set(nums2);
    for(let i = 0; i < nums3.length; i++) {
        if(set1.has(nums3[i]) || set2.has(nums3[i])) {
            setRes.add(nums3[i]);
        }
    }
    return [...setRes];
};