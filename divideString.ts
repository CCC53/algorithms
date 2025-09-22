// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/?envType=problem-list-v2&envId=string

function divideString(s: string, k: number, fill: string): string[] {
    const res: string[] = [];
    let filled = s.length % k === 0 ? s : s.concat(fill.repeat(k-s.length % k));
    for(let i = 0; i < filled.length/k; i++) {
        let string = filled.slice(i*k, (i+1)*k);
        res.push(string);
    }
    return res;
};

function divideString2(s: string, k: number, fill: string): string[] {
    const res: string[] = [];
    const filled = s.length % k === 0 ? s : s.concat(fill.repeat(k-s.length % k));
    for(let i = 0; i < filled.length; i += k) {
        const string = filled.slice(i, i+k);
        res.push(string);
    }
    return res;
}
