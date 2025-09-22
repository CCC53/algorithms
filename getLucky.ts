// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/description/?envType=problem-list-v2&envId=string

function getLucky(s: string, k: number): number {
    const mapAlpha = new Map<string, number>([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
        ['f', 6],
        ['g', 7],
        ['h', 8],
        ['i', 9],
        ['j', 10],
        ['k', 11],
        ['l', 12],
        ['m', 13],
        ['n', 14],
        ['o', 15],
        ['p', 16],
        ['q', 17],
        ['r', 18],
        ['s', 19],
        ['t', 20],
        ['u', 21],
        ['v', 22],
        ['w', 23],
        ['x', 24],
        ['y', 25],
        ['z', 26]
    ]);
    let nString = '';
    for(let i of s) {
        nString += mapAlpha.get(i);
    }
    let n = BigInt(nString);
    let res = 0;
    for(let i = 0; i < k; i++) {
        let sum = 0;
        let nS = n.toString();
        for(let j = 0; j < nS.length; j++) {
            sum += Number(nS[j]);
        }
        n = BigInt(sum);
        res = sum;
    }
    return res;
};

function getLucky2(s: string, k: number): number {
    const mapAlpha = new Map<string, number>([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4],
        ['e', 5],
        ['f', 6],
        ['g', 7],
        ['h', 8],
        ['i', 9],
        ['j', 10],
        ['k', 11],
        ['l', 12],
        ['m', 13],
        ['n', 14],
        ['o', 15],
        ['p', 16],
        ['q', 17],
        ['r', 18],
        ['s', 19],
        ['t', 20],
        ['u', 21],
        ['v', 22],
        ['w', 23],
        ['x', 24],
        ['y', 25],
        ['z', 26]
    ]);
    let nString = '';
    for(let i of s) {
        nString += mapAlpha.get(i);
    }
    let n = BigInt(nString);
    let res = 0;
    for(let i = 0; i < k; i++) {
        let sum = [...n.toString()].map(Number).reduce((p, c) => p+c);
        n = BigInt(sum);
        res = sum;
    }
    return res;
};