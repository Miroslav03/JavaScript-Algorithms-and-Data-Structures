//Implementing methods for treversing a tree using a Binary Search Tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root
            while (true) {
                if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                } else if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this
                    } else {
                        current = current.left;
                    }
                }
            }
        }
    }

    BFS() {
        //Breadth First Search
        //Create two arrays: the first one we use as a queue, the second as the array we return with the value  
        const queue = [];
        const finalArr = [];
        //Create a node starting with the root and enqueue it 
        let node = this.root
        queue.push(node)
        //Loop as long as there is anything in the queue 
        while (queue.length) {
            //Dequeue the node and push the value to the finalArr
            node = queue.shift();
            finalArr.push(node.value)
            //If there is a left property on the dequeued node, add it to the queue
            if (node.left) {
                queue.push(node.left)
            }
            //If there is a right property on the dequeued node, add it to the queue
            if (node.right) {
                queue.push(node.right)
            }
        }
        //Return the arr that stores the values
        return finalArr;
    }

    DFSPreOrder() {
        //Depth First Search PreOrder 
        //Create an array to store the valus of the visited nodes
        const finalArr = [];
        //Using a helper recursive function we check every node in the left then we move to the right
        function traverse(node) {
            //Push the value in the array
            finalArr.push(node.value);
            //If the node has a left property we call the helper function with that property
            if (node.left) traverse(node.left);
            //If the node has a right property we call the helper function with that property
            if (node.right) traverse(node.right);
        }
        //Invoke the helper function
        traverse(this.root);
        //Return the array with the values
        return finalArr;
    }

    DFSPostOrder() {
        //Depth First Search PreOrder 
        //Create an array to store the valus of the visited nodes
        const finalArr = [];
        //Using a helper recursive function we loop from the leafs till the root and add 
        function traverse(node) {
            //If the node has a left property we call the helper function with that property
            if (node.left) traverse(node.left);
            //If the node has a right property we call the helper function with that property
            if (node.right) traverse(node.right);
            //Push the value in the array
            finalArr.push(node.value)
        }
        //Invoke the helper function
        traverse(this.root);
        //Return the arr 
        return finalArr;
    }

    DFSInOrder() {
        //Depth First Search PreOrder 
        //Create an array to store the valus of the visited nodes
        const finalArr = [];
        //Using a helper recursive function we traverse till the left side is null then add the value and continue with the right
        function traverse(node) {
            //If the node has a left property we call the helper function with that property
            if (node.left) traverse(node.left);
            //Push the value in the array
            finalArr.push(node.value)
            //If the node has a right property we call the helper function with that property
            if (node.right) traverse(node.right);
        }
        //Invoke the helper function
        traverse(this.root);
        //Return the arr 
        return finalArr;
    }
}

//     10
//  5      12
//2   6 11   15

const binarySearchTree = new BinarySearchTree()
binarySearchTree.insert(10)
binarySearchTree.insert(5)
binarySearchTree.insert(12)
binarySearchTree.insert(2)
binarySearchTree.insert(6)
binarySearchTree.insert(11)
binarySearchTree.insert(15)
console.log(binarySearchTree.BFS())
console.log(binarySearchTree.DFSPreOrder())
console.log(binarySearchTree.DFSPostOrder())
console.log(binarySearchTree.DFSInOrder())