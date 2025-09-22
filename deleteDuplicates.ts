import { ListNode } from './getDecimalValue';
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let currentNode = head;
    while (currentNode && currentNode.next) {
        if (currentNode.val === currentNode.next.val) {
            currentNode.next = currentNode.next.next;
            continue
        }
        currentNode = currentNode.next;
    }
    return head;
};