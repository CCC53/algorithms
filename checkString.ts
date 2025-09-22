// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
function checkString(s: string): boolean {
    let prev = s[0];
    let n = 1;
    while(n < s.length) {
        if (prev > s[n]) {
            return false;
        }
        prev = s[n];
        n++;
    }
    return true;
};