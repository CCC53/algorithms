// https://leetcode.com/problems/baseball-game/description/?envType=problem-list-v2&envId=stack

function calPoints(operations: string[]): number {
    const stack: number[] = [];
    for(const op of operations) {
        const numOp = Number(op);
        if (!isNaN(numOp)) {
            stack.push(numOp);
        } else {
            switch (op) {
                case "C":
                    stack.pop();
                    break;
                case "D":
                    const lastD = stack.at(-1);
                    if (lastD) {
                        stack.push(lastD*2);
                    }
                    break;
                default:
                    const lastP = stack.at(-1);
                    const previousP = stack.at(-2);
                    if (lastP && previousP) {
                        stack.push(previousP+lastP);
                    }
                    break;
            }
        }
    }
    return stack.length > 0 ? stack.reduce((p,c) => p+c) : 0;
};