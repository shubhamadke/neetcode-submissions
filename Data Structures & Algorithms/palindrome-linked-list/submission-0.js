/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    isPalindrome(head) {
        if (head === null || head.next === null) return true;

        // --- PHASE 1: Find the Middle (Tortoise & Hare) ---
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next; // 1 step
            fast = fast.next.next; // 2 steps
        }

        // 'slow' is now standing exactly at the halfway mark!

        // --- PHASE 2: Reverse the Second Half ---
        let prev = null;
        let curr = slow;

        while (curr !== null) {
            let nextTemp = curr.next; // Remember the next box
            curr.next = prev; // Flip the arrow backwards!
            prev = curr; // Move 'prev' forward
            curr = nextTemp; // Move 'curr' forward
        }

        // 'prev' is now the head of our reversed second half!

        // --- PHASE 3: Compare the Two Halves ---
        let p1 = head; // Starts at the original front
        let p2 = prev; // Starts at the reversed back

        while (p2 !== null) {
            // We only need to check until the second half runs out
            if (p1.val !== p2.val) {
                return false; // Mismatch found! Not a palindrome.
            }
            p1 = p1.next;
            p2 = p2.next;
        }

        return true; // Everything matched perfectly!
    }
}
