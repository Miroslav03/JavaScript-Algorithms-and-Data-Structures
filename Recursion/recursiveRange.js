// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num) {
    let total = num;
    function addNumbers() {
        if (num === 1) {
            return 1;
        }
        num--
        return total + addNumbers()
    }

    return total
}


console.log(recursiveRange(6));