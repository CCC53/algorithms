// https://leetcode.com/problems/find-lucky-integer-in-an-array/

const findLucky = (arr: number[]): number => {
    const mapFreq = new Map<number, number>();
    const arrFreq: number[] = [];
    for(let i = 0; i < arr.length; i++) {
        if(mapFreq.has(arr[i])) {
            mapFreq.set(arr[i], mapFreq.get(arr[i]) + 1);
        } else {
            mapFreq.set(arr[i], 1);
        }
    }

    for(let [key, value] of mapFreq) {
        if (key === value) {
            arrFreq.push(key);
        }
    }
    return arrFreq.length === 0 ? -1 : arrFreq.length > 1 ? Math.max(...arrFreq) : arrFreq[0];    
};