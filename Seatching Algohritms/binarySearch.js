function binarySearch(sortedArr, num) {

    let leftPointer = 0;
    let rightPointer = sortedArr.length - 1;
    let middlePointer = Math.trunc(sortedArr.length / 2);


    while (sortedArr[middlePointer] !== num) {
        if (num < sortedArr[middlePointer]) {
            rightPointer = middlePointer - 1
            if (rightPointer === -1) {
                return -1
            }
        } else {
            leftPointer = middlePointer + 1
            if (leftPointer === sortedArr.length) {
                return - 1
            }
        }
        middlePointer = Math.trunc((leftPointer + rightPointer) / 2);
    }

    if (sortedArr[middlePointer] === num) {
        return middlePointer;
    }
    

}

console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1