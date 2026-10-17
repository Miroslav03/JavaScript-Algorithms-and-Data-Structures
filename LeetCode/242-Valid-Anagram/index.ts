function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false

    const mapS = new Map<string,number>()

    for(let i = 0; i< s.length; i++){
    const sLetter = s[i]
    const tLetter = t[i]

    mapS.set(sLetter, (mapS.get(sLetter) ?? 0) + 1)
    mapS.set(tLetter, (mapS.get(tLetter) ?? 0) - 1)

    }

    for(let [letter,times] of mapS){
        if(times === 0) continue
        return false
    }

    return true

};