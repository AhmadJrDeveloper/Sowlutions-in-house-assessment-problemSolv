class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeNodes(x) {
    while (this.head && this.head.value > x) {
      this.head = this.head.next;
    }
    let current = this.head;
    while (current && current.next) {
      if (current.next.value > x) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  toArray() {
    let array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}

let linkedList = new LinkedList();
let values = [10, 5, 12, 7, 3, 9, 10];
values.forEach((val) => linkedList.addNode(val));
linkedList.removeNodes(7);
console.log(linkedList.toArray());
