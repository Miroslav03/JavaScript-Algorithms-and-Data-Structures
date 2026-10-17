function isAlphaNumeric(char:string) {
  return /^[0-9\p{L}]$/u.test(char);
}

function isPalindrome(s: string): boolean {
    let firstPointerIdx = 0
    let secondPointerIdx = s.length - 1
    
    while(firstPointerIdx < secondPointerIdx){
        if(!isAlphaNumeric(s[firstPointerIdx])){
            firstPointerIdx++
            continue
        }

        if(!isAlphaNumeric(s[secondPointerIdx])){
            secondPointerIdx--
            continue
        }

        if(s[firstPointerIdx].toLowerCase() === s[secondPointerIdx].toLowerCase()){
            secondPointerIdx--
            firstPointerIdx++
            continue
        }

        return false
    }

    return true
};