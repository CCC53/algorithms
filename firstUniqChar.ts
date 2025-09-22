// https://leetcode.com/problems/first-unique-character-in-a-string/
function firstUniqChar(s: string): number {
    const map = new Map<string, number>();
    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }

    for(const [k, v] of map) {
        if(v === 1) {
            return s.indexOf(k)
        }
    }
    return -1;
};