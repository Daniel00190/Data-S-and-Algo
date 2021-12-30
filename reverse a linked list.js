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

class LinkedList {
   constructor() {
      this.head = null;
      this.length = 0;
   }

   insertAtHead(data) {
      const newNode = new LinkedListNode(data, this.head);
      this.head = newNode;
      this.length++;
   }

   getByIndex(index) {
      if (index < 0 || index >= this.length) return null;

      let current = this.head;
      for (let i = 0; i < index; i++) {
         current = current.next;
      }
      return current;
   }

   removeHead() {
      this.head = this.head.next;
      this.length--;
   }

   insertAtIndex(index, value) {
      if (index === 0) return this.insertAtHead(value);

      const prev = this.getByIndex(index - 1);
      if (prev == null) return null;

      prev.next = new LinkedListNode(value, prev.next);
      this.length++;
   }

   removeAtIndex(index) {
      if (index === 0) return this.removeHead();

      const prev = this.getByIndex(index - 1);
      if (prev == null) return null;

      prev.next = prev.next.next;
      this.length--;
   }

   print() {
      let output = "";
      let current = this.head;
      while (current) {
         output = `${output}${current.value} -> `;
         current = current.next;
      }
      console.log(`${output}null`);
   }
}

class LinkedListNode {
   constructor(value, next) {
      this.value = value;
      this.next = next;
   }
}

LinkedList.fromValues = function (...values) {
   const ll = new LinkedList();
   for (let i = values.length - 1; i >= 0; i--) {
      ll.insertAtHead(values[i]);
   }
   return ll;
};

let ll = new LinkedList();
ll.insertAtHead(3);
ll.insertAtHead(5);
ll.insertAtHead(8);
ll.insertAtHead(9);
console.log(ll);
console.log(reverseListRecursive(ll));
