function nestedEvenSum(obj) {
    const values = Object.values(obj)
    let arr = [];
    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] === 'object') {
            arr = arr.concat(nestedEvenSum(values[i]))
        } else if (typeof values[i] === 'number' && values[i] % 2 === 0) {
            arr.push(values[i])
        } else {
            continue;
        }
    }
    return arr.reduce((a, c) => a + c, 0)
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

/* console.log(nestedEvenSum(obj1)); // 6 */
console.log(nestedEvenSum(obj2)) // 10