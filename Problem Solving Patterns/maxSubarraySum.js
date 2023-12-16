function maxSubarraySum(arr, num) {
    //Chekicng if the num is bigger then the arr length
    if (num > arr.length) {
        return null;
    }

    //Summing all the numbers till num
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += arr[i];
    }

    let previousSum = sum;
    //Looping => starting from the num(args) and adding next number in the arr and removing the last added that made a pair
    for (let i = num; i < arr.length; i++) {
        const calculatedNewSum = previousSum - arr[i - num] + arr[i];
        if (calculatedNewSum > sum) {
            sum = calculatedNewSum;
        }
        previousSum = calculatedNewSum

    }
    return sum;
}

maxSubarraySum([100, 200, 300, 400], 2) // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)  // 39 
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5 
maxSubarraySum([2, 3], 3) // null