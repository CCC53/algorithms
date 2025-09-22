// https://leetcode.com/problems/reverse-integer/

const reverse = (x: number): number => {
    if (x < 0 ) {
        const xS = x.toString().replace('-', '')
        const reversedNegative = Number([...xS.toString()].reverse().join('')) * -1
        return reversedNegative < Math.pow(-2, 31) ? 0 : reversedNegative
    }
    const reversed = Number([...x.toString()].reverse().join(''))
    return reversed > Math.pow(2, 31) -1 ? 0 : reversed
}