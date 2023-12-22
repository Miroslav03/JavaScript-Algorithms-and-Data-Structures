// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

/* function isPalindrome(string) {

    let newString = '';
    let arr = string.split('');
    function addLetter(arr) {
        if (arr.length === 0) {
            return;
        }

        newString += arr[arr.length - 1];
        arr.pop();

        return addLetter(arr)
    }
    addLetter(arr)

    if(string === newString){
        return true;
    }else{
        return false;
    }
} */

function isPalindrome(string) {
    if (string.length === 1) return true
    if (string.length === 2) {
        if (string[0] === string[1]) {
            return true;
        } else {
            return false;
        }
    }
    if (string[0] === string[string.length - 1]) {
        return isPalindrome(string.slice(1,-1))
    }else{
        return false;
    }
}

console.log(isPalindrome('amanaplanacanalpanama'));