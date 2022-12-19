import linkedList from "./linkedList.js";

const nodeLinkedList = new linkedList();
nodeLinkedList.prepend("data2"); //added at the beginning
nodeLinkedList.append("data1"); //added at the end
nodeLinkedList.prepend("data3"); //added at the beginning
console.log(nodeLinkedList.size); //3
console.log(nodeLinkedList.head()); //node {value: 'data3', next: node}
console.log(nodeLinkedList.tail()); //node {value: 'data1', next: null}
console.log(nodeLinkedList.at(2)); //node {value: 'data2', next: node}
console.log(nodeLinkedList.at(-1)); //Index given is greater or 0. The current range of the list is 1 - 3
console.log(nodeLinkedList.findValue("asdf")); //The value asdf is not in the list.
console.log(nodeLinkedList.currentList); //new list after the pop
console.log(nodeLinkedList.toString()); //(data3) -> (data2) -> (data1) -> null
console.log(nodeLinkedList.insertAt("data4", 3)); //added new node (data3) -> (data2) -> (data4) ->  (data1) -> null
console.log(nodeLinkedList.size); //new size is 4
console.log(nodeLinkedList.removeAt(4)); //removed data1
console.log(nodeLinkedList.size); //3
