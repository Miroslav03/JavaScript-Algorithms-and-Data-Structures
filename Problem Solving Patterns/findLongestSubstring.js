function findLongestSubstring(string) {

    //Cheking if the srtring is empty
    if (string.length == 0) {
        return 0;
    }

    //Making object where we store all the letters which we enocunter one time
    let obj = {};
    //Looping through the string with while loop and storing those letters
    let start = 0;
    let end = 0;
    let length = 0;
    while (start < string.length) {
        const letter = string[end];
        //If letter is udnefined this means end is going out of the arr we check if the current length of keys of Obj is bigger and break
        if (letter === undefined) {
            if (Object.keys(obj).length > length) {
                length = Object.keys(obj).length;
            }
            break;
        }
        if (!obj.hasOwnProperty(letter)) {
            obj[letter] = 1;
            end++
        } else {
            //If we encounter the same letter we check if the obj.keys length is bigger then length if so we save the new length
            if (Object.keys(obj).length > length) {
                length = Object.keys(obj).length;
            }
            //Empty the object, increment the start, set end to equal start 
            obj = {};
            start++
            end = start;
        }
    }

    return length;


}
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
findLongestSubstring('abc') // 6
