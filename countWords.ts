// https://leetcode.com/problems/count-common-words-with-one-occurrence/
function countWords(words1: string[], words2: string[]): number {
    const map1 = new Map<string,number>();
    const map2 = new Map<string,number>();
    let res = 0;
    for(let i = 0; i < words1.length; i++) {
        if(map1.has(words1[i])) {
            map1.set(words1[i], map1.get(words1[i]) + 1);
        } else {
            map1.set(words1[i], 1);
        }
    }
    for(let i = 0; i < words2.length; i++) {
        if(map2.has(words2[i])) {
            map2.set(words2[i], map2.get(words2[i]) + 1);
        } else {
            map2.set(words2[i], 1);
        }
    }
    for(const [k,v] of map1) {
        if (map2.has(k)) {
            if (map2.get(k) === 1 && v === 1) {
                res++;
            }
        }
    }
    return res;
}; 