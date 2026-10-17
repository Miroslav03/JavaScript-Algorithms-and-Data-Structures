function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map<number,number>()

    for (let i = 0; i < nums.length; i++){
        const num = nums[i]

        if((i - map.get(num)!) <= k) return true
        map.set(num,i)
    }

    return false
};