function minSubArrayLen(target: number, nums: number[]): number {
    if(nums.length === 0) return 0

    let currentSmallestLength = Infinity
    let currentSum = nums[0]

    let left = 0
    let right = 0

    while(right < nums.length){
        if(currentSum < target){
            if(right === nums.length - 1){
                break
            }

            right++
            currentSum += nums[right]
            continue
        }

        if(currentSum >= target){
            currentSmallestLength = Math.min(currentSmallestLength, right - left + 1)
            currentSum -= nums[left]

            left++
            continue
        }
    }

    if(currentSmallestLength === Infinity) return 0

    return currentSmallestLength
};