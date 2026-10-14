function maxVowels(s: string, k: number): number {
    let currentMax = 0
    let current = 0 //1

    const vowels = ['a','e','i','o','u']

    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
                current ++ 
        }

        if(i - k >= 0){
           if(vowels.includes(s[i-k])){
                current -- 
            }
            currentMax = Math.max(current,currentMax)
            continue
        }

        if(i - k < 0){
            currentMax = Math.max(current,currentMax)
            continue
        }
    }
    
    return currentMax
};