import { ListNode } from './getDecimalValue';
// https://leetcode.com/problems/palindrome-linked-list/description/

const isPalindromeLinkedList = (head: ListNode | null): boolean => {
    let currentNode = head;
    const arr: string[] = [];
    while(currentNode) {
        arr.push(currentNode.val.toString());
        currentNode = currentNode.next;
    }
    const original = arr.join('');
    const reverse = arr.reverse().join('');
    return original === reverse;
};