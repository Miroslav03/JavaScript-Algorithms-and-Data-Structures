class MyQueue {
    private stack1: number[] = []
    private stack2: number[] = []

    constructor() {
        
    }

    push(x: number): void {
        // O(1)
        this.stack1.push(x)    
    }

    pop(): number {
        if(this.stack2.length !== 0) return this.stack2.pop()!
        
        // O(1) Ammortized - 1 O(n) and many O(1)
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop()!)
        }

        return this.stack2.pop()!
    }

    peek(): number {
        if(this.stack2.length !== 0) return this.stack2[this.stack2.length - 1] 

        // O(1) Ammortized - 1 O(n) and many O(1)
        while(this.stack1.length > 0){
            this.stack2.push(this.stack1.pop()!)
        }

        return this.stack2[this.stack2.length - 1] 
    }

    empty(): boolean {
        return (this.stack1.length === 0) && (this.stack2.length === 0)
    }
}