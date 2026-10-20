class RecentCounter {
    private queue :number[] = []
    private enqueueIdx: number = 0

    constructor() {
        
    }

    ping(t: number): number {
        this.queue.push(t)

        for(let i = this.enqueueIdx; i < this.queue.length; i++){
            if((this.queue[i] >= t - 3000) && (this.queue[i] <= t)){
                continue
            }

            this.enqueueIdx++
        }

        return this.queue.length - this.enqueueIdx
    }
}
