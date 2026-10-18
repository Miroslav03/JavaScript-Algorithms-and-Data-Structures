class MinStack {
    private stack: number[] = []
    private minElementIdx: number[] = []

    constructor() {
        
    }

    push(value: number): void {
        this.minElementIdx.push(Math.min(this.minElementIdx[this.minElementIdx.length - 1] ?? Infinity, value))

        this.stack.push(value)
    }

    pop(): void {
        this.minElementIdx.pop()

        this.stack.pop()
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.minElementIdx[this.minElementIdx.length - 1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */