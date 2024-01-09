//Implementing Priority Queue using a Max Binary Heap

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        //Crete a new Node with the priority and the value
        const newNode = new Node(value, priority)
        //We push the newNode we created 
        this.values.push(newNode);
        //Set the index to be at the node we pushed
        let index = this.values.length - 1;
        //We loop till the index is bigger than zero and compare the node priority with its parent priority, if it's bigger we swap them
        while (index > 0) {
            //Make variables for the parent of the added value and the value 
            let addedValue = this.values[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            //Check if the priority is greater than its parent
            if (addedValue.priority > parent.priority) {
                //If greater we swap them and change the index
                [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
                index = parentIndex;
            } else {
                //Otherwise we break 
                break;
            }
        }
        //Return the queue
        return this.values;
    }

    dequeue() {
        //Store the root(biggest priority) in a variable that we return later
        const extractedValue = this.values[0];
        //Pop the last element 
        const end = this.values.pop();
        //If the length is 0 after we pop we return the value to avoid infinite loop
        if (this.values.length === 0) {
            return extractedValue.value
        }
        //Put the end element in the beginning
        this.values[0] = end
        let index = 0;
        //Loop till the index is smaller than the length bubbling down the node with priority we swaped with the root(biggest priority in the queue)
        while (index < this.values.length) {
            let newFirstValue = this.values[index]
            //Making variables for the left and right children indexes 
            let leftChildIndex = (index * 2) + 1;
            let rightChildIndex = (index * 2) + 2;
            //Making variables for the left and right children
            let leftChild = this.values[leftChildIndex];
            let rightChild = this.values[rightChildIndex];
            //Making a temp variable that we use to store the index of the bigger child
            let swap = null;
            //Check if the children indexes are valid
            if (leftChildIndex < this.values.length) {
                if (leftChild.priority > newFirstValue.priority) {
                    //If the left child priority is bigger we store its index in the swap
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < this.values.length) {
                //Check if the right children priority is bigger, or swap is already set and the right child priority is bigger than the left
                if ((swap === null && newFirstValue.priority < rightChild.priority)
                    || (swap !== null && rightChild.priority > leftChild.priority)) {
                    swap = rightChildIndex;
                }
            }
            //Break if swap is null this means the node is in the correct place
            if (swap === null) break;
            //Otherwise swap the node with the child and change the index
            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
            index = swap;

        }
        //Return the biggest element
        return extractedValue.value;
    }
}

let priorityQueue = new PriorityQueue()
priorityQueue.enqueue('Bruse', 1);
priorityQueue.enqueue('Gun Shot', 5);
priorityQueue.enqueue('Fever', 2);
priorityQueue.enqueue('High Fever', 3);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());


