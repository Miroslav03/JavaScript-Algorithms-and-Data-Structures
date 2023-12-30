function selectionSort(arr) {
    //Finding and placing the smallest number in the beggining each iteration
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]){
                min = j
            }
        }
        //Checks if the indexes are diffrent to avoid swaping unnecessary
        if(min !== i){
            let temp = arr[min]
            arr[min] = arr[i]
            arr[i] = temp
        }
    }
    return arr;
}



selectionSort([1,2,3,4,5,6])