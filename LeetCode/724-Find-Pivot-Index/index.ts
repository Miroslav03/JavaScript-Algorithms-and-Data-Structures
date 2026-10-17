function pivotIndex(nums: number[]): number {
    let totalSum = 0
    let leftSum = 0

    for(let i of nums){
        totalSum += i
    }
    
    for(let i = 0; i < nums.length; i++){
        if((leftSum) === (totalSum - (leftSum + nums[i]))){
            return i
        }

        leftSum += nums[i]
    }

    return -1
};