// https://leetcode.com/problems/kth-distinct-string-in-an-array/
function kthDistinct(arr: string[], k: number): string {
    const map = new Map<string, number>();
    for(let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    const onlyDistinct: string[] = [];
    for(const [k, v] of map) {
        if(v === 1) {
            onlyDistinct.push(k)
        }
    }
    return onlyDistinct[k-1] ? onlyDistinct[k-1] : "";
};