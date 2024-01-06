//Implementing a Queue using a SinglyLinkedList
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        //Creating a new Node using the value
        const newNode = new Node(value);
        //If the length is 0 set the first and last to be equal to the newNode
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            //Otherwise set the last next to be the newNode and set the last to be the newNode
            this.last.next = newNode;
            this.last = newNode;
        }
        //Return the length incremented by 1
        return ++this.length;
    }

    dequeue() {
        //If the length is 0 return 0
        if (this.length === 0) return null;
        //Create a variable that stores the first value
        const dequeuedValue = this.first;
        //If the length is 1 set first and last to null
        if (this.length === 1) {
            this.first = null;
            this.second = null;
        } else {
            //Otherwise set the first to be first.next
            this.first = dequeuedValue.next
        }
        //Increment the length 
        this.length--
        //Return the dequeued value
        return dequeuedValue.value;
    }
}

const queue = new Queue

queue.enqueue('First')
queue.enqueue('Second')
queue.enqueue('Last')
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());