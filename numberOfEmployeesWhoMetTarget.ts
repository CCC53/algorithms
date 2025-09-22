// https://leetcode.com/problems/number-of-employees-who-met-the-target/description/

function numberOfEmployeesWhoMetTargetFirst(hours: number[], target: number): number {
    return hours.filter(e => e >= target).length;
};

function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
    let result = 0;
    for(let i = 0; i < hours.length; i++) {
        if(hours[i] >= target) {
            result++;
        }
    }
    return result;
};