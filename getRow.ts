// https://leetcode.com/problems/pascals-triangle-ii/?envType=problem-list-v2&envId=array

function getRow(rowIndex: number): number[] {
    const result: number[] = [1];
    for(let k = 1; k <= rowIndex; k++) {
        result[k] = result[k-1] * (rowIndex - k+1)/k;
    }
    return result;
};