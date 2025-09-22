import { ListNode } from './getDecimalValue';
// https://leetcode.com/problems/middle-of-the-linked-list/description/

const traversal = (head: ListNode | null, end: number): ListNode | null => {
    let index = 1;
    let currentNode = head;
    while (index !== end) {
        currentNode = currentNode.next;
        index++;
    }
    return currentNode;
}

const middleNode = (head: ListNode | null): ListNode | null => {
    let currentNode = head;
    let length = 0;
    while (currentNode) {
        currentNode = currentNode.next;
        length++;
    }
    let median = length % 2 === 0 ? (length/2)+1 : Math.round(length/2);
    head = traversal(head, median)
    return head;
}