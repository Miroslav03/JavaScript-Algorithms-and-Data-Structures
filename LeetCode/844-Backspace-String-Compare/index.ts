// O(1) - Space 0(n) - Time
function backspaceCompare(s: string, t: string): boolean {
    let isSame = true

    let p1 = s.length - 1
    let p2 = t.length - 1

    while(p1 >= 0 || p2 >= 0){
        if(s[p1] === '#'){
          let positions = 0
            while(s[p1] === '#' || positions !== 0){
                if(s[p1] === '#'){
                    positions++
                    p1--
                    continue
                }
                
                positions--
                p1--
            }
        }

        if(t[p2] === '#'){
            let positions = 0
            while(t[p2] === '#' || positions !== 0){
                if(t[p2] === '#'){
                    positions++
                    p2--
                    continue
                }
                
                positions--
                p2--
            }
        }

        if(s[p1] === t[p2]){
            p1--
            p2--
            continue
        }

        isSame = false
        p1--
        p2--
    }

    return isSame
};

// O(n) - Space 0(n + m) - Time
function backspaceCompare2(s: string, t: string): boolean {
    const stackFirst = []
    const stackSecond = []

    for(const char of s){
        if(char !== '#'){
            stackFirst.push(char)
            continue
        }

        stackFirst.pop()
    }


    for(const char of t){
        if(char !== '#'){
            stackSecond.push(char)
            continue
        }

        stackSecond.pop()
    }

    return stackFirst.join('') === stackSecond.join('')
};
