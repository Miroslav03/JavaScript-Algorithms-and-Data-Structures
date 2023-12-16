function areThereDuplicates(...args) {

    //Checking if there are no args
    if (args.length == 0) {
        return false;
    }

    //Setting index(i) to an argument and comparing every other argument with it using second pointrer index
    let i = 0;
    let j = i + 1;
    while (i < args.length - 1) {
        const firstArg = args[i];
        const comparingArg = args[j];
        if (firstArg == comparingArg) {
            return true;
        } else {
            if (j == args.length - 1) {
                i++;
                j = i + 1;
            } else {
                j++;
            }
        }
    }
    return false;

}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true  
areThereDuplicates('a', 'b', 'c', 'a') //true