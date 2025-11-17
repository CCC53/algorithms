// https://leetcode.com/problems/longest-common-prefix/?envType=problem-list-v2&envId=array

function longestCommonPrefix(strs: string[]): string {
    if(strs.length === 0) {
        return "";
    }
    strs.sort();
    const first = strs[0];
    const last = strs[strs.length - 1];
    let res = "";
    for(let i = 0; i < first.length; i++) {
        if(first[i] === last[i]) {
            res += first[i];
        } else {
            break;
        }
    }
    return res;
};