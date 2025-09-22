// https://leetcode.com/problems/duplicate-zeros/description/?envType=problem-list-v2&envId=array

function duplicateZerosDirtyMine(arr: number[]): void {
    let fixedSize = arr.length;
    let i = 0;
    while(i < arr.length) {
        if(arr[i] === 0) {
            arr.splice(i, 0, 0);
            i++;
        }
        i++;
    }
    let toRemove = arr.length - fixedSize;
    arr.splice(fixedSize, toRemove)
};

function duplicateZeros(arr: number[]): void {
    const result: number[] = [];
    for (let i = 0; result.length < arr.length; i++) {
        result.push(arr[i]);
        if (arr[i] === 0) {
            result.push(0);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = result[i];
    }
};