// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
function finalValueAfterOperations(operations: string[]): number {
    let result = 0;
    for(let i = 0; i < operations.length; i++) {
        operations[i].includes('++') ? result++ : result--;
    }
    return result;
};