// https://leetcode.com/problems/unique-number-of-occurrences/description/

function uniqueOccurrencesFirst(arr: number[]): boolean {
    const mapFreq = new Map<number, number>();
    for(let i = 0; i < arr.length; i++) {
        if (mapFreq.has(arr[i])) {
            mapFreq.set(arr[i], mapFreq.get(arr[i]) + 1);
        } else {
            mapFreq.set(arr[i], 1);
        }
    }
    const array = [...mapFreq].map((v, k) => v[1]);
    const set = new Set(array);
    return array.length === set.size;
};

function uniqueOccurrences(arr: number[]): boolean {
    const freqMap = new Map<number,number>();
    for(let i = 0; i < arr.length; i++) {
        if(freqMap.has(arr[i])) {
            freqMap.set(arr[i], freqMap.get(arr[i]) + 1);
        } else{
            freqMap.set(arr[i], 1);
        }
    }
    const set = new Set<number>();
    for(const [key, val] of freqMap) {
        if(set.has(val)) {
            return false;
        }
        set.add(val);
    }
    return true;
};
