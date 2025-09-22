// https://leetcode.com/problems/valid-parentheses/description/?envType=problem-list-v2&envId=stack

function isValid(s: string): boolean {
    const stack: string[] = [];
    for (const char of s) {
        if (['(', '[', '{'].includes(char)) {
            stack.push(char);
        } else if (stack.at(-1) === "[" && char !== "]" || stack.at(-1) === "(" && char !== ")" || stack.at(-1) === "{" && char !== "}") {
            return false;
        } else {
            const removed = stack.pop();
            if (!removed) {
                return false;
            }
        }
    }
    return stack.length === 0;
};