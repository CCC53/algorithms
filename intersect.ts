// https://leetcode.com/problems/intersection-of-two-arrays-ii/?envType=problem-list-v2&envId=hash-table
function intersect(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, number>();
    const res: number[] = [];
    nums1.forEach(n => {
        if(map.has(n)) {
            map.set(n, map.get(n) + 1);
            // map.set(n, (map.get(n) || 0) + 1)
        } else {
            map.set(n, 1);
        }
    });

    nums2.forEach(n => {
        if(map.get(n) > 0) {
            res.push(n);
            map.set(n, map.get(n) - 1)
        }
    });
    return res;
};