function runningSum(nums: number[]): number[] {
    for(let i = 0; i < nums.length; i++){
        nums[i] = nums[i] + (nums[i - 1] ?? 0)
    }

    return nums
};