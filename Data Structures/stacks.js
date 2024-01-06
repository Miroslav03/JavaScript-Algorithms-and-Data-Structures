//Implementing a Stack using a SinglyLinkedList
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(value) {
        //Creating a new Node with the value
        const newNode = new Node(value);
        //If the length is 0 set the first and last to be the new Node
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            //Otherwise make the first the new Node and point it to the previous first 
            const currentFirst = this.first;
            this.first = newNode;
            this.first.next = currentFirst;
        }
        return ++this.length;
    }

    pop() {
        //If length is 0 return null
        if (this.length === 0) return null;
        //Create a variable that stores the value of the first
        const poppedValue = this.first;
        //If the length is 0 set the first and last to be null
        if (this.length === 1) {
            this.first = null;
            this.last = null;
        } else {
            //Otherwise set the first to be the next value in the stack 
            this.first = poppedValue.next;
        }
        //Decrefment and return the value 
        this.length--;
        return poppedValue.value;
    }
}

const stack = new Stack;

stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
