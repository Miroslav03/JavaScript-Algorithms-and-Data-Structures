function lengthOfLongestSubstring(s: string): number {
    if(s.length === 1) return 1

    let currentMaxLength = 0
    const set = new Set()

    let left = 0 
    let right = 0 

    while(right < s.length){
        while(set.has(s[right])){
            set.delete(s[left])
            left++
        }

        set.add(s[right])
        currentMaxLength = Math.max(currentMaxLength, right - left + 1)
        right++
    }

    return currentMaxLength
};