/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    if(nums.length === 1) return

    let write = 0
    let read = 0

    while(read < nums.length){
        if(nums[read] !== 0){
            if(write < read){
                nums[write] = nums[read]
                nums[read] = 0
                write++
                read++
                continue
            }
            read++
            write++
            continue
        }
        read++
    }

};