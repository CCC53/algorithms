// https://leetcode.com/problems/valid-anagram/description/

function isAnagram(s: string, t: string): boolean {
    const sMap = new Map<string, number>();
    const tMap = new Map<string, number>();
    for(let i = 0; i < s.length; i++) {
        if(sMap.has(s[i])) {
            sMap.set(s[i], sMap.get(s[i]) + 1);
        } else {
            sMap.set(s[i], 1);
        }
    }
    for(let i = 0; i < t.length; i++) {
        if(tMap.has(t[i])) {
            tMap.set(t[i], tMap.get(t[i]) + 1);
        } else {
            tMap.set(t[i], 1);
        }
    }
    return compareMaps(sMap, tMap);
};

function compareMaps(map1: Map<string, number>, map2: Map<string, number>) {
    let testVal: number;
    if (map1.size !== map2.size) {
        return false;
    }
    for (let [key, val] of map1) {
        testVal = map2.get(key);
        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }
    return true;
}