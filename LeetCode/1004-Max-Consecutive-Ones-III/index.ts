function longestOnes(nums: number[], k: number): number {
    let currentMaxOutput = 0
    let currentZeros = 0

    let right = 0
    let left = 0

    while(right < nums.length){
        if(nums[right] === 0){
            currentZeros++
        }

        while(currentZeros > k){
            if(nums[left] === 0){
                currentZeros--
            }
            
            left++
        }

        currentMaxOutput = Math.max(currentMaxOutput, right - left + 1)
        right++
    }

    return currentMaxOutput
};