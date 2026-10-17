function findMaxAverage(nums: number[], k: number): number {
    let currentBiggest = -Infinity
    let currentSum = 0

    for(let i = 0; i < nums.length; i++){
       if(i === k - 1){
        currentSum += nums[i]
        currentBiggest = Math.max(currentBiggest,currentSum)
       }else if(i < k - 1){
        currentSum += nums[i]
       }  else{  
        currentSum += nums[i] - nums[i - k]
        currentBiggest = Math.max(currentBiggest,currentSum)
       }
    }

    return currentBiggest / k 
};