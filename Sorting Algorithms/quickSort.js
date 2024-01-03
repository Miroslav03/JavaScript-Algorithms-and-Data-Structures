
function quickSort(arr, leftPart = 0, rightPart = arr.length - 1) {
    if (leftPart < rightPart) {
        let pivotNumber = pivot(arr, leftPart, rightPart)
        quickSort(arr, leftPart, pivotNumber - 1)
        quickSort(arr, pivotNumber + 1, rightPart)
    }
    return arr;
}


function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(arr, firstIndex, secondIndex) {
        [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
    }
    
    let pivot = arr[start];
    let swapIndex = start;
    
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i)
        }
    }
    
    swap(arr, start, swapIndex)
    
    return swapIndex;
}
console.log(quickSort([4, 6, 9, 1, 2, 5]))
