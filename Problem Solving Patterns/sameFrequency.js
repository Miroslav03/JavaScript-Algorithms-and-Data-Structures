function sameFrequency(num1, num2) {

    //Checking if the length is diffrent => returning false
    if (String(num1).length !== String(num2).length) {
        return false;
    }

    //Creating two objects and storing every digit and its count times in the object 
    const obj1 = {};
    const obj2 = {};

    for (const digit of String(num1)) {
        if (!obj1.hasOwnProperty(digit)) {
            obj1[digit] = 1;
        } else {
            obj1[digit] += 1;
        }
    }
    for (const digit of String(num2)) {
        if (!obj2.hasOwnProperty(digit)) {
            obj2[digit] = 1;
        } else {
            obj2[digit] += 1;
        }
    }
    //Loop through the first obj and check if the data is the same with the second one
    for (const digit of Object.keys(obj1)) {
        if (obj1[digit] === obj2[digit]) {
            continue;
        } else {
            return false;
        }
    }

    return true;

}

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false 