class HashTable {
    constructor(length) {
        this.keyMap = new Array(length);
        this.length = length;
    }

    hash(key) {
        //Function that accepts a key string and gives an index based on the length of the hash map
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            const char = key.charCodeAt(i);
            hash = (hash << 5) - hash + char;
        }
        return Math.abs(hash) % this.length;
    }

    set(key, value) {
        //Adds a key-value pair to the hash table. If the hash index is empty, it creates a new bucket; otherwise, it appends to the existing bucket.
        const index = this.hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        //Retrieves the value associated with a given key.
        //It computes the hash, finds the corresponding bucket, and iterates through the bucket to find the matching key.
        const index = this.hash(key);
        if (this.keyMap[index]) {
            const arr = this.keyMap[index];
            for (const [_key, value] of arr) {
                if (_key === key) {
                    return value;
                }
            }
        }
        /*  if (this.keyMap[index]) {
             for (let i = 0; i < this.keyMap[index].length; i++) {
                 if (this.keyMap[index][i][0] === key){
                     return this.keyMap[index][i][1];
                 }
            }
         } */
        return undefined;
    }

    keys() {
        //Returns an array containing all the keys in the hash table.
        const keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keysArr.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keysArr;
    }

    values() {
        //Returns an array containing all the values in the hash table.
        const valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    valuesArr.push(this.keyMap[i][j][1]);
                }
            }
        }
        return valuesArr;
    }
}

const hashTable = new HashTable(13)
hashTable.set("maroon", "#800000")
hashTable.set("yellow", "#FFFF00")
hashTable.set("olive", "#808000")
hashTable.set("salmon", "#FA8072")
hashTable.set("lightcoral", "#F08080")
hashTable.set("mediumvioletred", "#C71585")
hashTable.set("plum", "#DDA0DD")
console.log(hashTable.get('lightcoral'));
console.log(hashTable.keys());
console.log(hashTable.values());


