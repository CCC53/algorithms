// https://leetcode.com/problems/palindrome-number/description

function isPalindromeNumberFirst(x: number): boolean {
    let xs = x.toString().split('').join('');
    let xsr = x.toString().split('').reverse().join('');
    return xs === xsr;
};

function isPalindromeNumber(x: number): boolean {
    if(x < 0) {
        return false;
    }
    let aux = x;
    let reversed = '';
    while(aux > 0) {
        const digit = aux % 10;
        reversed += digit;
        aux = Math.floor(aux / 10);
    }
    return Number(reversed) === x;
};

function isPalindromeNumber2(x: number): boolean {
    if(x < 0) {
        return false;
    }
    let aux = x;
    let reversed = 0;
    while(aux > 0) {
        const digit = aux % 10;
        reversed = reversed * 10 + digit;
        aux = Math.floor(aux / 10);
    }
    return reversed === x;
};