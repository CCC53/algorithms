// https://leetcode.com/problems/find-common-elements-between-two-arrays/description/

function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    const res: number[] = [0,0];
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    for(let i = 0; i < nums1.length; i++) {
        if (set2.has(nums1[i])) {
            res[0]++;
        }
    }
    for(let i = 0; i < nums2.length; i++) {
        if (set1.has(nums2[i])) {
            res[1]++;
        }
    }
    return res;
};

function findIntersectionValuesFirst(nums1: number[], nums2: number[]): number[] {
    const res: number[] = [0,0];
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    for(let n of nums1) {
        if (set2.has(n)) {
            res[0]++;
        }
    }
    for(let n of nums2) {
        if (set1.has(n)) {
            res[1]++;
        }
    }
    return res;
};