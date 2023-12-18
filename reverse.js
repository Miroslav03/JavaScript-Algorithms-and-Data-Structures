class Stack {
    constructor() {
        this.stack = [];
        this.top = -1;
    }

    initialize() {
        this.top = -1;
    }

    isEmpty() {
        return this.top === -1;
    }

    push(element) {
        if (this.top === MAX_SIZE - 1) {
            console.log("Stack overflow");
            return;
        }
        this.stack[++this.top] = element;

    }

    pop(element) {
        if (this.isEmpty()) {
            console.log("Stack underflow");
            return;
        }
        element = this.stack[this.top--];
        this.stack.pop();
        return element;
    }
}

function convertToInfix(rpn) {
    const stack = new Stack();
    stack.initialize();

    const len = rpn.length;
    let operand = "";

    for (let i = 0; i < len; i++) {
        if (Number(rpn[i]) || (rpn[i] == '-' && Number(rpn[i + 1]))) {
            let j = 0;
            while (Number(rpn[i]) || (rpn[i] == '-' && Number(rpn[i + 1]))) {
                operand += rpn[i++];
                j++;
            }
            stack.push(operand);
            i--;
            operand = '';
        } else if (rpn[i] === ' ') {
            continue;
        } else {
            let operand1, operand2;
            operand2 = stack.pop(operand2);
            operand1 = stack.pop(operand1);

            let formattedOperand = "";
            if (operand1 !== "" && operand2 !== "") {
                formattedOperand = `(${operand1}${rpn[i]}${operand2})`;
            }
            stack.push(formattedOperand);
        }
    }

    let result = "";
    result = stack.pop()

    console.log("Classical Notation:", result);
}


const MAX_SIZE = 100;

// Example usage
const rpnInput = "3 3 3 + +";
convertToInfix(rpnInput);
