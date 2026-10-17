function removeDuplicates(nums: number[]): number {
    if(nums.length === 0) return 0
    if(nums.length === 1) return 1

    let left = 1;
    let right = 1;
    let numbers = 1

    while(right < nums.length){
      if(nums[right] !== nums[left - 1]){
        nums[left] = nums[right]
        left++
        right++
        numbers++
        continue
      }
      
        right++
    }

    return numbers
};