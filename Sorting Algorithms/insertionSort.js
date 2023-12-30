function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        const currentValue = arr[i]
        let j
        for (j = i - 1; j >= 0 && currentValue < arr[j]; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentValue;
    }

    console.log(arr);
}


insertionSort([4, 3, 2, 5, 76, 4])