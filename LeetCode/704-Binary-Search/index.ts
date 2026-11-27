function search(nums: number[], target: number): number {
    if(nums.length === 1 && target === nums[0]) return 0

    let left = 0
    let right = nums.length - 1
    let mid = Math.floor((right + left) / 2)

    while(left <= right){
        if(target === nums[mid]){
            return mid
        }

        if(target > nums[mid]){
            left = mid + 1
        }

        if(target < nums[mid]){
            right = mid - 1
        }

        mid = Math.floor((right + left) / 2)
    }

    return -1
};