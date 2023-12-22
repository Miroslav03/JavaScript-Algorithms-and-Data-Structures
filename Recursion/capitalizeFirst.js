function capitalizeFirst(arr) {
    let newArr = [];
    function capitalize(string) {
        let newString = '';
        for (let i = 0; i < string.length; i++) {
            if (i === 0) {
                newString += string[i].toUpperCase();
            } else {
                newString += string[i];
            }
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




console.log(capitalizeFirst(['car', 'taco', 'banana']))
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
