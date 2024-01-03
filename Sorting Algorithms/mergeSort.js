function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right)

}

function merge(leftPart, rightPart) {
    let i = 0;
    let j = 0;
    const mergedArr = [];
    while (leftPart.length > i && rightPart.length > j) {
        if (leftPart[i] > rightPart[j]) {
            mergedArr.push(rightPart[j]);
            j++;
        } else {
            mergedArr.push(leftPart[i]);
            i++;
        }
    }

    while (i <= leftPart.length - 1) {
        mergedArr.push(leftPart[i]);
        i++;
    }

    while (j <= rightPart.length - 1) {
        mergedArr.push(rightPart[j]);
        j++
    }

    return mergedArr;

}

console.log(mergeSort([324,5612,54,5,2,1,5,23,423,423,1,1,43,523,5,6,3,3]));