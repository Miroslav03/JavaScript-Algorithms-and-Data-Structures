function validAnagram(str1, str2) {
    //Invalid Input number, arr, boolean, null etc..
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        return false;

    }
    //Edge Cases => Cheking for Empty Strings 
    if (str1.length === 0 && str2.length === 0) {
        return true;
    }

    //Checking if the two strings length is equal
    if (str1.length !== str2.length) {
        return false;
    }
    //Creating two objects where we store the data from the string as key->letter value->number of times in the string
    const obj1 = {};
    const obj2 = {};

    for (const letter of str1) {
        if (!obj1.hasOwnProperty(letter)) {
            obj1[letter] = 0;
            obj1[letter] += 1;
        } else {
            obj1[letter] += 1;
        }
    }
    for (const letter of str2) {
        if (!obj2.hasOwnProperty(letter)) {
            obj2[letter] = 0;
            obj2[letter] += 1;
        } else {
            obj2[letter] += 1;
        }
    }
    //Looping through the first object and checking if the entries are the same as the second one 
    for (const letter of Object.keys(obj1)) {
        if (obj1[letter] == obj2[letter]) {
            continue;
        } else {
            return false;
        }
    }
    return true;



}




console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true