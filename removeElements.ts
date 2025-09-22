import { ListNode } from './getDecimalValue';
// https://leetcode.com/problems/remove-linked-list-elements/

const removeElements = (head: ListNode | null, val: number): ListNode | null => {
    while (head !== null && head.val === val) {
        head = head.next;
    }
    let currentNode = head;
    while (currentNode !== null && currentNode.next !== null) {
        if (currentNode.next.val === val) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    return head;
}