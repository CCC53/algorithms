// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
 

function getDecimalValue(head: ListNode | null): number {
    let currentNode = head;
    let binary = '';
    while (currentNode) {
        binary += currentNode.val.toString();
        currentNode = currentNode.next;
    }
    return parseInt(binary, 2);
};