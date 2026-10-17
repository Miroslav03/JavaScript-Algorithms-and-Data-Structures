class NumArray {
    private nums: number[];

    constructor(nums: number[]) {
        this.nums = nums

        for(let i = 0; i < this.nums.length; i++){
            this.nums[i] = this.nums[i] + (this.nums[i - 1] ?? 0)
        }
    }

    sumRange(left: number, right: number): number {
        return this.nums[right] - ((left - 1) < 0 ? 0 : this.nums[left - 1])
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */