function collectStrings(obj) {
    let arr = [];
    const values = Object.values(obj);

    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] === 'string') {
            arr.push(values[i])
        } else {
            arr = arr.concat(collectStrings(values[i]))
        }

    }

    return arr
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj))// ["foo", "bar", "baz"])