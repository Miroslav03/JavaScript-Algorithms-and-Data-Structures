function evalRPN(tokens) {
    const stack = []
    const operands = ['+', '-', '*', '/']

    for(let i = 0; i < tokens.length; i++){
        const currentItem = tokens[i]

        if(!operands.includes(currentItem)){
            stack.push(Number(currentItem))
            continue
        }

        const secondNum = Number(stack.pop())
        const firstNum = Number(stack.pop())

        if(currentItem === '+'){
            stack.push(firstNum + secondNum)
            continue
        }

        if(currentItem === '-'){
            stack.push(firstNum - secondNum)
            continue
        }

        if(currentItem === '*'){
            stack.push(firstNum * secondNum)
            continue
        }

        if(currentItem === '/'){
            stack.push(Math.trunc(firstNum / secondNum))
            continue
        }
    }

    return stack[0]
};

evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])