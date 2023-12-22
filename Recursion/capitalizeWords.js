function capitalizedWords(arr) {
    let newArr = [];
    function capitalize(string) {
        let newString = '';
        for (let i = 0; i < string.length; i++) {
            newString += string[i].toUpperCase();
        }
        newArr.push(newString);
        if (arr.length === 0) {
            return;
        }
        return capitalize(arr.shift());
    }

    capitalize(arr.shift());
    return newArr;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
