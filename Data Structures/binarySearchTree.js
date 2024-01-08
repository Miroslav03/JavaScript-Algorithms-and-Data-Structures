//Implementation of a Binary Search Tree

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
        //Create a new node
        const node = new Node(value);
        //Check if there is a root, if not - the root now becomes that new node
        if (this.root === null) {
            this.root = node;
            return this;
        } else {
            //If there is a root, check if the value of the new node is greater than or less than the value of the root
            let current = this.root;
            while (true) {
                //If it is less
                if (value < current.value) {
                    //Check to see if there is a node to the left
                    if (current.left === null) {
                        //If there is not, add that node as the left proper
                        current.left = node;
                        return this;
                    } else {
                        //If there is, move to that node and repeat these steps 
                        current = current.left;
                    }
                    //If it is greater
                } else if (value > current.value) {
                    //Check to see if there is a node to the right
                    if (current.right === null) {
                        //If there is not, add that node as the right property
                        current.right = node;
                        return this;
                    } else {
                        //If there is, move to that node and repeat these steps
                        current = current.right;
                    }
                }
            }
        }

    }

    find(value) {
        //If root is null return null
        if (this.root === null) return null
        //Make a current(temp) variable
        let current = this.root;
        //Loop through the tree
        while (true) {
            //If the value of the variable current is equal to the value passed in return the node
            if (current.value === value) {
                return current;
            } else if (value > current.value) {
                //If the value is bigger than the value in the current variable check if the right is null - return undefined
                if (current.right === null) {
                    return undefined;
                    //Otherwise make the current variable to that node 
                } else {
                    current = current.right
                }
            } else if (value < current.value) {
                //If the value is less than the value in the current variable check if the left is null - return undefined
                if (current.left === null) {
                    return undefined;
                } else {
                    //Otherwise make the current variable to that node 
                    current = current.left;
                }
            } 
        }
    }
}

//     10
//  5      12
//2   6  11   15

const binarySearchTree = new BinarySearchTree()
binarySearchTree.insert(10)
binarySearchTree.insert(5)
binarySearchTree.insert(12)
binarySearchTree.insert(2)
binarySearchTree.insert(6)
binarySearchTree.insert(11)
binarySearchTree.insert(15)
console.log(binarySearchTree.find(15));


