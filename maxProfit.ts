// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices: number[]): number {
    let minPrice = prices[0];
    const sums: number[] = [];
    for(let i = 1; i < prices.length; i++) {
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        } else {
            const sum = Math.abs(minPrice - prices[i]);
            sums.push(sum);
        }
    }
    return sums.length === 0 ? 0 : Math.max(...sums);
};