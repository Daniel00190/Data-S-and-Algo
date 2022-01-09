var mergeTwoLists = function (list1, list2) {
   if (list1 == null) return list2;
   if (list2 == null) return list1;

   if (list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
   } else {
      list2.next = mergeTwoLists(list2.next, list1);
      return list2;
   }
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

var mergeTwoLists = function (l1, l2) {
   var mergedHead = { val: -1, next: null },
      crt = mergedHead;
   while (l1 && l2) {
      if (l1.val > l2.val) {
         crt.next = l2;
         l2 = l2.next;
      } else {
         crt.next = l1;
         l1 = l1.next;
      }
      crt = crt.next;
   }
   crt.next = l1 || l2;

   return mergedHead.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

var mergeTwoLists = function (l1, l2) {
   // initialize a dummy head node
   // initialize a crtNode variable to keep track of the current node, starting with the dummy head node
   // while there are still nodes to compare in two lists
   // if value of 2nd node is less than value of 1st node
   // set the current node's link to l2 node
   // set the l2 node to l2's next node
   // else
   // set the current node's link to l1 node
   // set the l1 node to l1's next node
   // move on to the next node
   // if one of the lists no longer have any nodes to compare, point crt's link to the remaining nodes in the other list
   // if both lists are empty, point crt's link to null
   // return merged linked list
};
