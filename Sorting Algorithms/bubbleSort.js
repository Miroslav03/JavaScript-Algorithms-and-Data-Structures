function bubbleSort(arr) {
    //Comparing the two numbers next to each other and pushing the bigger one towards the right part of the arr each iteration
    let noSwaps = null;
    for (let i = arr.length; i > 0; i--) {
        //If no swaps make a flag that stops the outer loop 
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }
    }

    return arr;
}



console.log(bubbleSort([7, 1, 2, 3, 4, 5, 6]))