function getNumberOfDigits(number) {
    return String(number).length;
}

function getDigit(number, index) {
    //3212 0 => 2
    //3212 1 => 1
    //3212 2 => 2
    //3212 3 => 3
    //3212 4 => 0
    const finalNumber = String(number).split('').reverse().join('')[index];

    return finalNumber ? finalNumber : 0;
}

function findMostDigits(arr) {
    let mostDigits = 0;

    for (const num of arr) {
        mostDigits = Math.max(mostDigits, getNumberOfDigits(num))
    }

    return mostDigits;
}

function radixSort(arr) {

    const mostDigitsCount = findMostDigits(arr);
    for (let i = 0; i < mostDigitsCount; i++) {
        const bucketsArr = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
            bucketsArr[getDigit(arr[j], i)].push(arr[j])
        }
        arr = [].concat(...bucketsArr);
    }

    return arr;
}


console.log(radixSort([1,2,23,34124,31,31,1345,123123]))