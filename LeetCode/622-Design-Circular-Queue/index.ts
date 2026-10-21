class MyCircularQueue {
    private front: number = 0
    private rear: number  = 0
    private queue: (number | null) []  = []
    private size: number = 0

    constructor(k:number) {
        this.queue = new Array(k).fill(null);
    }

    enQueue(value: number): boolean  {
        if(this.isEmpty()){
            this.rear = 0
            this.front = 0
            this.queue[this.rear] = value
            this.size++
            return true
        }

        if(this.isFull()){
            return false
        }

        this.rear = (this.rear + 1) % this.queue.length 
        this.queue[this.rear] = value
        this.size++
        return true
    }

    deQueue():boolean {
        if(this.isEmpty()){
            return false
        }

        this.queue[this.front] = null
        this.front = (this.front + 1) % this.queue.length
        this.size--

        return true
    }

    Front():number {
        if(this.size === 0){
            return -1
        }

        return this.queue[this.front]!
    }

    Rear():number {
        if(this.size === 0){
            return -1
        }

        return this.queue[this.rear]!
    }

    isEmpty():boolean {
        return this.size === 0
    }

    isFull():boolean {
        return this.size === this.queue.length
    }
}


const q = new MyCircularQueue(3);

console.log(q.enQueue(1)); // true
console.log(q.enQueue(2)); // true
console.log(q.enQueue(3)); // true
console.log(q.deQueue());  // true
console.log(q.enQueue(4)); // true
console.log(q.deQueue());  // true
console.log(q.deQueue());  // true

console.log(q.Front());   