//Node => place to store a value 
//=> val - place of value 
//=> next - reference to next node 

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        //This function accpet a value
        //Create a new node using the value passed to the function

        const newNode = new Node(value)
        if (!this.head) {
            //If there is no head property on the list, set the head and tail to be the newly created node 
            this.head = newNode;
            this.tail = newNode;
        } else {
            //Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node    
            this.tail.next = newNode;
            this.tail = newNode;
        }
        //Increment the length by one
        this.length++;
        return this;
    }

    pop() {
        //If there are no nodes in the list, return undefined
        if (this.length === 0) return undefined;

        //Loop through the list until you reach the tail
        let current = this.head;
        let newTail = this.head;

        while (current.next) {
            newTail = current;
            current = current.next
        }
        //Set the tail to be the 2nd to last node
        this.tail = newTail;
        //Set the next property of the 2nd to last node to be null
        this.tail.next = null;
        //Decrement the length of the list by 1
        this.length--;
        //Return the value of the node removed 
        return current;

    }

    shift() {
        //If there are no nodes return undefined
        if (this.length === 0) return undefined;
        //Store the current head property in a variable
        const currentHead = this.head;
        //Set the head property to be the current head's next property
        this.head = this.head.next;
        //Decrement the length by 1
        this.length--;
        //Return the value of the removed node
        return currentHead;
    }

    unshift(value) {
        //This fucntion should accept a value
        //Create a new node using the value passed to the fucntion
        const newNode = new Node(value);

        if (this.length === 0) {
            //If there is no head property on the list, set the head and the tail to be the newly created node
            this.head = newNode;
            this.tail - newNode;
        } else {
            //Otherwise set the newly  created node's next property to be the current head property on the list
            newNode.next = this.head;
            //Set the head property on the list to be that newly created node 
            this.head = newNode;
        }
        //Increment the length of the list by 1
        this.length++;
        //Return the linked list
        return this;
    }

    get(index) {
        //This function should accept an index
        //If the index is less than zero or greater than or equal to the length of the list,return null
        if (index < 0 || index >= this.length) return null;
        //Loop through the list until you reach the index and return the node at that specific index
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    set(index, value) {
        //The fucntion should accept a value and an index 
        //Use get function to find the specific node 
        const oldValue = this.get(index);
        //If the node is not found ,return false
        if (!oldValue) {
            return false
        } else {
            //If the node is found, set the value of that node to be the value passed to the function and return true
            oldValue.val = value;
            return true
        }
    }

    insert(index, value) {
        //The fucntion should accept a value and an index 
        //If the index is less than zero or greater than the length, return false
        if (index < 0 || index > this.length) return false
        //If the index is the same as the length, push a new node to the end of the list
        if (index === this.length) {
            this.push(value)
            return true
        }
        //If the index is 0, unshift a new node to the start of the list
        if (index === 0) {
            this.unshift(value)
            return true
        }
        //Otherwise, using the get method, access the node at the index - 1
        const oldNode = this.get(index - 1);
        const newNode = new Node(value);
        //Set the next property on the new node to be the previous 
        newNode.next = oldNode.next;
        //Set the next property on that node to be the new node
        oldNode.next = newNode;
        //Increment the length
        this.length++;
        //Return true
        return true;
    }


    remove(index) {
        //The fucntion should accept an index 
        //If the index is less than zero or greater than the length, return undefined
        if (index < 0 || index > this.length) return undefined
        //If the index is the same as the length-1, pop
        if (index === this.length - 1) {
            this.pop();
            return true;
        }
        //If the index is 0, shift
        if (index === 0) {
            this.shift();
            return true;
        }
        //Otherwise, using the get method, access the node at the index - 1
        const previousNode = this.get(index - 1);
        const removedNode = this.get(index);
        //Set the next property on that node to be the next of the next node
        previousNode.next = removedNode.next;
        //Decrement the length
        this.length--;
        //Return the value of the node removed
        return removedNode;
    }

    reverse() {
        //Swap the head and tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        //Create a variable called next
        let next = null;
        //Create a variable called prev
        let previous = null;
        //Loop through the list
        for (let i = 0; i < this.length; i++) {
            //Set next to be the next property on whatever node is
            next = node.next;
            //Set the next property on the node to be whatever prev is
            node.next = previous;
            //Set prev to be the value of the node variable
            previous = node;
            //Set the node variable to be the value of the next variable
            node = next;
        }
        return this;
    }

}


const singlyLinkedList = new SinglyLinkedList()
singlyLinkedList.push('Qvorov');
singlyLinkedList.push('Ivanov');
singlyLinkedList.push('Miroslav')
singlyLinkedList.reverse()
console.log(singlyLinkedList);

