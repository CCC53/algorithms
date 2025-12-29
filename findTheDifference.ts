// https://leetcode.com/problems/find-the-difference/

function findTheDifferenceFirst(s: string, t: string): string {
    const mapFreq = new Map<string, number>();
    for(let i = 0; i < s.length; i++) {
        if(mapFreq.has(s[i])) {
            mapFreq.set(s[i], mapFreq.get(s[i]) + 1);
        } else {
            mapFreq.set(s[i], 1);
        }
    }
    for(let i = 0; i < t.length; i++) {
        if(mapFreq.has(t[i])) {
            mapFreq.set(t[i], mapFreq.get(t[i]) - 1);
        } else {
            mapFreq.set(t[i], 1);
        }
    }
    for(let [key, value] of mapFreq) {
        if(value !== 0) {
            return key;
        }
    }
};

function findTheDifference(s: string, t: string): string {
    const map = new Map<string, number>();
    for(const letter of s) {
        map.set(letter, map.get(letter) ? map.get(letter) + 1 : 1);
    }
    for(const letter of t) {
        map.set(letter, map.get(letter) - 1);
        if (isNaN(map.get(letter)) || map.get(letter) < 0) {
            return letter;
        }
    }
    return "";
};