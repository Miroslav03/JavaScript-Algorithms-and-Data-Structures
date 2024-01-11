//Implementing a undirected Graph using an adjacencyList

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
            }else{
                //Throws an error if any of the vertices is missing in the graph or if the edge is not found.
                throw new Error('Missing Edge');
            }
            if (this.adjacencyList[vertex2].includes(vertex1)) {
                this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(x => x !== vertex1);
            }else{
                throw new Error('Missing Edge');
            }
        } else {
            throw new Error('Missing vertex in the graph!');
        }
    }
}

const graph = new Graph();

graph.addVertex('Sofia');
graph.addVertex('Plovdiv');
graph.addVertex('Haskovo');
graph.addVertex('Stara Zagora');
graph.addVertex('Varna');
graph.addVertex('Burgas');

graph.addEdge('Sofia','Plovdiv');
graph.addEdge('Sofia','Burgas');
graph.addEdge('Sofia','Stara Zagora');
graph.addEdge('Plovdiv','Varna');
graph.addEdge('Plovdiv','Burgas');

graph.removeEdge('Sofia','Plovdiv');
graph.removeVertex('Sofia')

