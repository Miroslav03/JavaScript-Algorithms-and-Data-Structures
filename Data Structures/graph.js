//Implementing a undirected Graph using an adjacencyList
//Traversing a graph with Depth and Breadth First Search
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList.hasOwnProperty(vertex)) {
            //Adds a new vertex to the graph.
            this.adjacencyList[vertex] = [];
        } else {
            //Throws an error if a vertex with the same name already exists.
            throw new Error('There is already a vertex with the same name!');
        }
    }

    addEdge(vertex1, vertex2) {
        //Adds an undirected edge between two vertices.
        //Checks if both vertices exist in the graph.
        if (this.adjacencyList.hasOwnProperty(vertex1) && this.adjacencyList.hasOwnProperty(vertex2)) {
            //Updates the adjacency lists of both vertices to include the other vertex.
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        } else {
            //Throws an error if any of the vertices is missing in the graph.
            throw new Error('Missing vertex in the graph!');
        }
    }

    removeVertex(vertex) {
        if (this.adjacencyList.hasOwnProperty(vertex)) {
            while (this.adjacencyList[vertex].length) {
                //Removes all edges connected to the vertex by filtering them out from the adjacency lists of other vertices.
                const vertexWithEdge = this.adjacencyList[vertex].pop();
                this.adjacencyList[vertexWithEdge] = this.adjacencyList[vertexWithEdge].filter(x => x !== vertex);
            }
            //Removes a vertex from the graph.
            delete this.adjacencyList[vertex];
        } else {
            //Throws an error if the specified vertex does not exist in the graph.
            throw new Error('There is not a vertex with this name!');
        }
    }

    removeEdge(vertex1, vertex2) {
        //Removes the edge between two vertices.
        //Checks if both vertices exist in the graph and if the edge is present before removing it.
        if (this.adjacencyList.hasOwnProperty(vertex1) && this.adjacencyList.hasOwnProperty(vertex2)) {
            if (this.adjacencyList[vertex1].includes(vertex2)) {
                //Filters out the specified vertices from each other's adjacency lists.
                this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(x => x !== vertex2);
            } else {
                //Throws an error if any of the vertices is missing in the graph or if the edge is not found.
                throw new Error('Missing Edge');
            }
            if (this.adjacencyList[vertex2].includes(vertex1)) {
                this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(x => x !== vertex1);
            } else {
                throw new Error('Missing Edge');
            }
        } else {
            throw new Error('Missing vertex in the graph!');
        }
    }

    depthFirstSearchRecursivly(start) {
        //Performs a depth-first search (DFS) on the graph starting from the specified vertex.
        //Uses a recursive approach.

        //Initializes an empty result array to store the visited vertices.
        const result = [];
        //Utilizes a visited object to track which vertices have been visited.
        const visited = {};
        const adjList = this.adjacencyList;
        
        function depthFirstSearch(vertex) {
            //Traverses through the graph, marking each visited vertex and adding it to the result array.
            if (!vertex) return null; //Base
            visited[vertex] = true;
            result.push(vertex);
            
            adjList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return depthFirstSearch(neighbor)
                }
            });
        }
        //Returns the result array containing the order of visited vertices.
        depthFirstSearch(start)
        return result;
    }

    depthFirstSearchIteratively(start) {
        //Performs a depth-first search (DFS) on the graph starting from the specified vertex.
        //Uses an iterative approach with a stack to mimic recursion.

        //Initializes an empty result array, a visited object, and a stack.
        const result = [];
        const visited = {};
        const stack = [start];
        let currentVertex = null;
        
        while (stack.length) {
            //Pops vertices from the stack, marks them as visited, and adds them to the result array.
            const currentVertex = stack.pop();
            visited[currentVertex] = true;
            result.push(currentVertex);
            
            //Iterates through the neighbors of the current vertex, pushing unvisited neighbors onto the stack.
            for (const neighbour of this.adjacencyList[currentVertex]) {
                if (!visited[neighbour]) {
                    stack.push(neighbour);
                    visited[neighbour] = true;
                }
            }
        }
        //Returns the result array containing the order of visited vertices.
        return result;
    }

    breadFirstSearch(start){
        //Performs a breadth-first search (BFS) on the graph starting from the specified vertex.
        //Uses a queue to explore vertices level by level.
        
        //Initializes an empty result array, a queue, and a visited array.
        const result = [];
        const queue = [start];
        const visited = [];
        
        while (queue.length) {
            //Dequeues vertices from the front of the queue, marks them as visited, and adds them to the result array.
            const currentVertex = queue.shift();
            visited[currentVertex] = true;
            result.push(currentVertex);
            
            for (const neighbor of this.adjacencyList[currentVertex]) {
                //Enqueues unvisited neighbors of the current vertex onto the back of the queue.
                //Continues the process until the queue is empty.
                if(!visited[neighbor]){
                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            }
        }
        //Returns the result array containing the order of visited vertices.
        return result;
    }
}

const graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")


graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

console.log(graph.depthFirstSearchRecursivly('A'));
console.log(graph.depthFirstSearchIteratively('A'));
console.log(graph.breadFirstSearch('A'));