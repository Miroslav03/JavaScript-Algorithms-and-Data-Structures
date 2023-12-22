function reverse(string) {

    let newString = '';
    string = string.split('');
    function addLetter(string) {
        if (string.length === 0) {
            return;
        }

        newString += string[string.length - 1];
        string.pop();

        return addLetter(string)
    }
    addLetter(string)
    return newString;
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse('Mir'));