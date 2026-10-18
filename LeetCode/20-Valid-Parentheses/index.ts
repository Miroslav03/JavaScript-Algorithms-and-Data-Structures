function isValid(s: string): boolean {
    const operations:Record<string,string> = {
        '(':')',
        '[':']',
        '{':'}'
    }

    const stack = []

    for(let i = 0; i < s.length; i++){
        if(!Object.hasOwn(operations,s[i])){
            if(stack.length === 0 || operations[stack[stack.length - 1]] !== s[i]){
                return false
            }

            stack.pop()
            continue
        }
       
        stack.push(s[i])
    }

    return stack.length === 0
};