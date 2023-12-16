function isSubsequence(str1, str2) {
    //Making two pointers

    //Pointer i refers to letter in str1
    let i = 0;
    //Pointer j refers to letter in str2
    let j = 0;

    //Checking if str1 is ''
    if (str1 === '') {
        return true;
    }

    //Looping through str2
    while (j < str2.length) {
        //If letters are equal increment pointer i and keep checking if we have equal letters in order 
        if (str1[i] === str2[j]) {
            i++;
        }
        //If pointer value is equal to str1 lenght return true 
        if (i === str1.length) {
            return true;
        }
        j++;
    }


}

isSubsequence('', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)