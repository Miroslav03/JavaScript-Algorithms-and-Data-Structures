function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number,number>()

    for(let i = 0; i < nums.length; i++){
        const current = nums[i];
        const left = target - current;

        if(map.has(left)){
            return [map.get(left)!,i]
        }
        
        map.set(current,i)
    }

    return []
};