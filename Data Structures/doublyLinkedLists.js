class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        //Create a new node with the value passed to the function
        const newNode = new Node(value)
        //If the length is 0 set the head and tail to be the newly created node
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //If not, set the next property on the tail to be that node 
            this.tail.next = newNode;
            //Set the previous property on the newly created node to be the tail
            newNode.prev = this.tail;
            //Set the tail to be the newly created node
            this.tail = newNode;
        }
        //Increment the length 
        this.length++;
        //Return the list
        return this;
    }

    pop() {
        //If length is 0, return undefine
        if (this.length === 0) return undefined;
        //Store the current tail in a variable to return later 
        const currentTail = this.tail;
        //If the length is 1, set the head and tail to be null 
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            //Update the tail to be the previous Node.
            this.tail = currentTail.prev;
            //Set the newTail's next to null
            this.tail.next = null
            //Set the popped element prev to be null
            currentTail.prev = null;
        }
        //Decrement the length
        this.length--;
        //Return the value removed
        return currentTail;
    }

    shift() {
        //If length is 0, return undefined
        if (this.length === 0) return undefined;
        //Store the current head property in a variable (we'll call it currentHead)
        const currentHead = this.head;
        //If the length is one
        if (this.length === 1) {
            //set the head to be null
            this.head = null;
            //set the tail to be nul
            this.tail = null;
        } else {
            //Update the head to be the next of the old head
            this.head = currentHead.next;
            //Set the old head's next to null
            currentHead.next = null;
            //Set the head's prev property to null
            this.head.prev = null;
        }
        //Decrement the length
        this.length--;
        //Return old head
        return currentHead;
    }

    unshift(value) {
        //Create a new node with the value passed to the function 
        const newNode = new Node(value);
        //If the length is 0
        if (this.length === 0) {
            //Set the head to be the new nod
            this.head = newNode;
            //Set the tail to be the new node
            this.tail = newNode;
        } else {
            //Set the prev property on the head of the list to be the new node
            this.head.prev = newNode;
            //Set the next property on the new node to be the head property
            newNode.next = this.head;
            //Update the head to be the new nodе
            this.head = newNode;
        }
        //Increment the length
        this.length++;
        //Return the list
        return this;
    }

    get(index) {
        //If the index is less than 0 or greater or equal to the length, return undefined
        if (index < 0 || index >= this.length) return undefined;
        //If the index is less than or equal to half the length of the list
        if (index <= this.length / 2) {
            let counter = 0;
            //Loop through the list starting from the head and loop towards the middle
            let current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            //Return the node once it is found
            return current;
        } else {
            //If the index is greater than half the length of the list
            let counter = this.length - 1
            //Loop through the list starting from the tail and loop towards the middle
            let current = this.tail;
            while (counter !== index) {
                current = current.prev
                counter--;
            }
            //Return the node once it is found
            return current;
        }
    }

    set(index, value) {
        //Create a variable which is the result of the get method at the index passed to the function 
        const currentNodeAtIndex = this.get(index);
        //If the get method returns a valid node, set the value of that node to be the value passed to the function
        if (currentNodeAtIndex) {
            currentNodeAtIndex.val = value;
            //Return true
            return true;
        }
        //Otherwise, return false
        return false;
    }

    insert(index, value) {
        //If the index is less than zero or greater than the length return false
        if (index < 0 || index > this.length) return false;
        //If the index is 0, unshift
        if (index === 0) {
            this.unshift(value);
            return true;
        }
        //If the index is the same as the length, push
        if (index === this.length) {
            this.push(value);
            return true;
        }
        //Create the new Node
        const newNode = new Node(value)
        //Use the get method to access the index -1
        const previousNode = this.get(index - 1);

        //Set the next and prev properties on the correct nodes to link everything together
        previousNode.next = newNode
        newNode.prev = previousNode
        newNode.next = previousNode.next
        previousNode.next.prev = newNode
        //Increment the length
        this.length++
        //Return the node
        return newNode;
    }

    remove(index) {
        //If the index is less than zero or greater than or equal to the length return undefined
        if (index < 0 || index >= this.length) return undefined;
        //If the index is 0, shift
        if (index === 0) return this.shift();
        //If the index is the same as the length-1, pop
        if (index === this.length - 1) return this.pop();

        //Use the get method to retrieve the item to be removed • Update the next and prev properties to remove the found node from the list
        const prevNode = this.get(index - 1);
        const removedNode = this.get(index);
        const nextNOde = this.get(index + 1);

        //Set next and prev to null on the found node
        removedNode.prev = null;
        removedNode.next = null;
        //Conect the prev and next nodes
        prevNode.next = nextNOde;
        nextNOde.prev = prevNode;
        //Decrement the length
        this.length--;
        //Return the removed node.
        return removedNode;

    }

    reverse() {
        //Switch the tail and the head
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        //Create two pointers
        let next
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            node.prev = next;
            node = next;
            prev = node;
        }
        //Viualization
        //[100,200,300,400]
        return this;
    }

}

let doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.push(1)
doublyLinkedList.push(2)
doublyLinkedList.push(3)
doublyLinkedList.reverse()
console.log(doublyLinkedList);