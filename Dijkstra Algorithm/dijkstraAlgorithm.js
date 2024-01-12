class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority })
        this.sort()
    }

    dequeue() {
        return this.values.shift()
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

class WeightedGraph {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList.hasOwnProperty(vertex)) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if (this.adjList.hasOwnProperty(vertex1)) {
            this.adjList[vertex1].push({ node: vertex2, weight })
        }
        if (this.adjList.hasOwnProperty(vertex2)) {
            this.adjList[vertex2].push({ node: vertex1, weight })
        }
    }

    Dijkstra(start, end) {
        // Initialize a priority queue to keep track of vertices and their tentative distances
        const nodes = new PriorityQueue();

        // Initialize an object to store the distances from the start vertex to each vertex
        const distances = {};

        // Initialize an object to store the previous vertex in the shortest path
        const previous = {};

        // Initialize an array to store the final result, which represents the shortest path
        const result = [];

        // Variable to keep track of the current vertex with the smallest known distance
        let smallest = null;

        // Initialize distances, enqueue start vertex with distance 0
        for (const vertex in this.adjList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        // Dijkstra's algorithm main loop
        while (nodes.values.length) {
            smallest = nodes.dequeue().val;

            // Check if the destination vertex is reached
            if (smallest === end) {
                result.push(smallest);

                // Reconstruct the shortest path by backtracking through previous vertices
                while (previous[smallest]) {
                    result.push(previous[smallest]);
                    smallest = previous[smallest];
                }

                break;
            }

            // Explore neighbors and update distances
            for (const { node, weight } of this.adjList[smallest]) {
                // Calculate the tentative distance from the start to the neighbor
                let candidate = distances[smallest] + weight;

                // If the tentative distance is smaller than the current known distance
                if (candidate < distances[node]) {
                    // Update the distance and set the current vertex as the previous vertex
                    distances[node] = candidate;
                    previous[node] = smallest;

                    // Enqueue the neighbor with the updated distance into the priority queue
                    nodes.enqueue(node, candidate);
                }
            }
        }

        // Return the reversed result array as the shortest path
        return result.reverse();
    }

}

const graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);


console.log(graph.Dijkstra("A", "E"))


// ["A", "C", "D", "F", "E"]