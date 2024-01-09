//Implementing a Binary Heap
class BinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        //We push the value we added 
        this.values.push(value);
        //Set the index to be at the value we pushed
        let index = this.values.length - 1;
        //We loop till the index is bigger than zero and compare the value we pushed with its parent, if it's bigger we swap them
        while (index > 0) {
            //Make variables for the parent of the added value and the value 
            let addedValue = this.values[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            //Chek if the value is greater than its parent
            if (addedValue > parent) {
                //If greater we swap them and change the index
                [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
                index = parentIndex;
            } else {
                //Otherwise we break 
                break;
            }
        }
        //Return the value
        return this.values;
    }

    extractMax() {
        //Store the root(biggest number) in a variable that we return later
        const extractedValue = this.values[0];
        //Pop the last element 
        const end = this.values.pop();
        //If the length is 0 after we pop we return the value to avoid infinite loop
        if (this.values.length === 0) {
            return extractedValue
        }
        //Put the end element in the beginning
        this.values[0] = end
        let index = 0;
        //Loop till the index is smaller than the length bubbling down the value we swaped with the root(biggest value in the heap)
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
                if (leftChild > newFirstValue) {
                    //If the left child is bigger we store its index in the swap
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < this.values.length) {
                //Check if the right children is bigger or swap is already set and the right child is bigger than the left
                if ((swap === null && newFirstValue < rightChild) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }
            //Break if swap is null this means the value is in the correct place
            if (swap === null) break;
            //Otherwise swap the value with the child and change the index
            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
            index = swap;

        }
        //Return the biggest element
        return extractedValue;
    }
}

let binaryHeap = new BinaryHeap()
binaryHeap.insert(1)
binaryHeap.insert(2)
binaryHeap.insert(3)
binaryHeap.insert(4)
binaryHeap.insert(5)
binaryHeap.insert(6)
binaryHeap.extractMax()
console.log(binaryHeap.values[0]) // 5

binaryHeap.extractMax()
console.log(binaryHeap.values) // [4,3,2,1])

binaryHeap.extractMax()
binaryHeap.extractMax()
binaryHeap.extractMax()
binaryHeap.extractMax()
console.log(binaryHeap.values) // []
