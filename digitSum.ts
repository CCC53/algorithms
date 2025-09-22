// https://leetcode.com/problems/calculate-digit-sum-of-a-string/description/?envType=problem-list-v2&envId=string

const separateString = (str: string, k: number): number[][] => {
    const groups: number[][] = [];
    let n = Math.floor(str.length/k) + 1;
    for(let i = 0; i < n; i++) {
        groups.push([...str].slice(k*i, k*(i+1)).map(Number))
    }
    return groups;
}

function digitSumMineBad(s: string, k: number): string {
    let groups = separateString(s, k);
    while(s.length > k) {
        let tempStr = ''
        for(let i = 0; i < groups.length; i++) {
            const sum = groups[i].reduce((p, c) => p + c, 0);
            tempStr += sum.toString();
        }
        s = tempStr;
        groups = separateString(s, k);
    }
    return s;
};

function digitSum(s: string, k: number): string {
    if(s.length <= k){
        return s
    }
    while(s.length > k) {
        let arr = s.match(new RegExp('.{1,' + k + '}', 'g'));
        s = '';
        for (let i = 0; i < arr.length; i++) {
            s += arr[i].split('').map(Number).reduce((sum, current) => sum + current, 0).toString();
        }
    }
    return s;
};