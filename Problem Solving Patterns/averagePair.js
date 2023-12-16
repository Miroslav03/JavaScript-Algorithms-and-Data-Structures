function averagePair(arr, num) {

    //Checking if the arr is empty => returning false
    if (arr.length === 0) {
        return false;
    }

    //Creating an index which points to the number
    let i = 0;
    //Creating a second pointer index which is used to get the second number
    let j = i + 1;

    //Looping and summing the numbers to find a match with the num
    while (i < arr.length - 1) {
        const number = arr[i];
        const secondNumber = arr[j];
        if ((number + secondNumber) / 2 == num) {
            //Find match => return true
            return true;
        } else {
            if (j == arr.length - 1) {
                i++;
                j = i + 1;
            } else {
                j++;
            }
        }
    }
    
    //Don't find a match => return false    
    return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true