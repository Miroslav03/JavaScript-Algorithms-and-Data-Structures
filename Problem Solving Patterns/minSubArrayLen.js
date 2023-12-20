function minSubArrayLen(nums, sum) {
    let start = 0;
    let end = 0;

    let smallestLength = Number.MAX_SAFE_INTEGER;
    let totalSum = 0;
    let length = 0;

    while (start < nums.length) {
        totalSum += nums[end];
        length++;
        if (length == 1 && totalSum < sum && start === nums.length - 1) {
            start++
        }
        if (totalSum >= sum) {
            if (length < smallestLength) {
                smallestLength = length;
            }
            start++
            end = start - 1;
            length = 0;
            totalSum = 0;
        }
        end++;
        if (end == nums.length) {
            start++
            end = start;
            totalSum = 0;
            length = 0;
            continue;
        }
    }

    if(smallestLength === Number.MAX_SAFE_INTEGER){
        return 0;
    }

    return smallestLength;
    
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0