// https://www.educative.io/interview-prep/coding/remove-nth-node-from-end-of-list
// Definition for a Linked List node
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
import {ListNode} from './ds_v1/LinkedList.js';

function removeNthLastNode(head, n) {
    
    // Replace this placeholder return statement with your code
    
    let counter = 0;
    let prev = null; // previous pointer
    let first = head; // first pointer
    let second = head; // second pointer
    while(counter < n && second != null) {
        second = second.next;
        counter++;
    } // arrived at the nth last node
    while(second != null) {
        // moving both pointers together towards the end
        prev = first;
        first = first.next;
        second = second.next;
    }
    
    if(prev == null) { // head is the node to remove
        head = head.next;
    }else{
        prev.next = first.next;
    }

    return head;  
}

export {
  removeNthLastNode
};
