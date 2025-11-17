// https://leetcode.com/problems/next-greater-element-i/description/?envType=problem-list-v2&envId=array

function nextGreaterElement1(nums1: number[], nums2: number[]): number[] {
    const result: number[] = [];
    for(const num of nums1) {
        const idxInNums2 = nums2.indexOf(num);
        const queue = nums2.slice(idxInNums2+1);
        let walkthrough = 0;
        for(const item of queue) {
            if (item > num) {
                result.push(item);
                break;
            }
            walkthrough++;
        }
        if (walkthrough === queue.length) {
            result.push(-1);
        }
    }
    return result;
};

function nextGreaterElement2(nums1: number[], nums2: number[]): number[] {
    const map = new Map<number, number>();
    const stack: number[] = [];

    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], i);
    }

    const res: number[] = new Array(nums1.length).fill(-1);

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
            res[map.get(stack.pop() as number) as number] = nums2[i];
        }

        if (map.has(nums2[i])) {
            stack.push(nums2[i]);
        }
    }

    return res;
};