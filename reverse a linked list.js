var reverseListIteration = function (head) {
   let prev = null;
   let curr = head;
   let nextTemp = null;

   while (curr != null) {
      nextTemp = curr.next; // As I explained earlier, I save the next pointer in the temp variable.
      curr.next = prev; // Then I reverse the pointer of the current node to its previous node.
      prev = curr; //  The previous node becomes the node we are currently at.
      curr = nextTemp; // And the current nodes becomes the next node we saved earlier. And we keep iterating.
   }
   return prev; // At the end, our previous node will be the head node of the new list.
};

var reverseListRecursive = function (head) {
   if (head == null || head.next == null) {
      return head;
   }
   newHead = reverseList(head.next);
   head.next.next = head;
   head.next = null;
   return newHead;
};

// ALVIN FROM STRUCTY
const reverseList = function (head) {
   let prev = null;
   let curr = head;

   while (head != null) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
   }
};
