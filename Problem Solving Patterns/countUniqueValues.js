function countUniqueValues(arr) {

    let i = 0;
    let j = i + 1;

    if(arr.length == 0){
        
        return 0 
    }

    while (j < arr.length) {
        const element = arr[i]
        const comparingElement = arr[j]
        if (element == comparingElement) {
            j++
        } else if (element != comparingElement) {
            i++
            arr[i] = comparingElement
            j++
        }
    }
    return i+1;
}


countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4