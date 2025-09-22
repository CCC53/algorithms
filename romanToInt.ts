// https://leetcode.com/problems/roman-to-integer/description/?envType=problem-list-v2&envId=string
function romanToInt(s: string): number {
    const convertMap = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    let prev = 0;
    let next = 1;
    let result = 0;
    while(s[next]) {
        if(convertMap.get(s[prev]) < convertMap.get(s[next])) {
            result -= convertMap.get(s[prev]);
        } else {
            result += convertMap.get(s[prev])
        }
        prev++;
        next++;
    }
    result += convertMap.get(s[s.length-1]);
    return result;
};

function romanToInt2(s: string): number {
    const convertMap = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
   
   let result = 0;

   for (let i = 0; i < s.length; i++) {
        const current = convertMap.get(s[i]);
        const next = convertMap.get(s[i + 1]);
        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
   }
   return result;
};