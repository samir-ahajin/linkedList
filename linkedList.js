import node from "./node.js";

export default class linkedList {
  constructor() {
    this.currentList = null;
    this.size = 0;
    this.nodeInfo = { value: "", next: "" };
  }
  prepend(value) {
    let tmp = null;
    if (this.currentList !== null) tmp = this.currentList;
    this.currentList = new node(value);
    this.currentList.next = tmp;
    this.size++;
  }
  append(value) {
    let tmp = this.currentList;
    if (tmp == null) {
      this.prepend(value);
      this.tail = value;
    }
    while (tmp.next !== null) tmp = tmp.next;
    tmp.next = new node(value);
    this.size++;
  }
  at(index) {
    if (this.currentList == null) return null;
    else if (index > this.size || index <= 0) {
      return `Index given is greater or 0. The current range of the list is 1 - ${this.size}`;
    } else {
      let counter = 1;
      let tmp = this.currentList;
      while (counter !== index) {
        tmp = tmp.next;
        counter++;
      }
      return tmp;
    }
  }
  head() {
    return this.currentList;
  }
  tail() {
    let tmp = this.currentList;
    if (tmp == null) return null;
    while (tmp.next !== null) tmp = tmp.next;
    return tmp;
  }
  pop() {
    let tmp = this.currentList,
      currentValue = null;
    if (tmp.next == null) {
      this.currentList = null;
    } else {
      while (tmp.next !== null) {
        currentValue = tmp;
        tmp = tmp.next;
      }
      currentValue.next = null;
    }
  }
  findValue(val) {
    if (this.currentList == null) return null;
    else {
      let counter = 1;
      let tmp = this.currentList;
      while (tmp.value !== val) {
        tmp = tmp.next;
        counter++;
        if (counter == 3) {
          return `The value ${val} is not in the list.`;
        }
      }
      return counter;
    }
  }
  toString() {
    if (this.currentList == null) return "null";
    else {
      let tmp = this.currentList;
      let output = "";
      while (tmp !== null) {
        output += ` (${tmp.value}) ->`;
        tmp = tmp.next;
      }
      return (output += " null");
    }
  }
  insertAt(value, index) {
    if (index > this.size || index <= 0) {
      return `Current size is ${this.size}. Provide index from 1-${this.size} only.`;
    } else if (index == 1) {
      this.prepend(value);
    } else {
      let counter = 1,
        prev,
        tmp = this.currentList,
        insertVal = new node(value);
      do {
        prev = tmp;
        tmp = tmp.next;
        counter++;
        if (tmp == null) break;
      } while (counter !== index);
      insertVal.next = prev.next;
      prev.next = insertVal;
      this.size++;
      return this.currentList;
    }
  }
  removeAt(index) {
    if (index > this.size || index <= 0) {
      return `Current size is ${this.size}. Provide index from 1-${this.size} only.`;
    } else {
      let counter = 1,
        prev,
        tmp = this.currentList;
      while (counter !== index) {
        prev = tmp;
        if (tmp.next == null) {
          tmp = "null";
        } else {
          tmp = tmp.next;
        }
        counter++;
      }
      prev.next = tmp.next;
      this.size--;
      return this.currentList;
    }
  }
}
//This will be useful if you want to display info only of the current node
// setInfoValue(value, next) {
//   this.nodeInfo.value = value;
//   this.nodeInfo.next = next;
//   return this.nodeInfo;
// }
