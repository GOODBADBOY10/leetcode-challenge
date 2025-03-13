// Implement the RandomizedSet class:

// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present. 
// Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present. 
// Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements 
// (it's guaranteed that at least one element exists when this method is called). 
// Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in average O(1) time complexity.

 

// Example 1:

// Input
// ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
// [[], [1], [2], [2], [], [1], [2], []]
// Output
// [null, true, false, true, 2, true, false, 2]

// Explanation
// RandomizedSet randomizedSet = new RandomizedSet();
// randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); // 2 was already in the set, so return false.
// randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.


class RandomizedSet {
    constructor() {
        this.valueIndex = new Map() // for storing the value and its index
        this.values = [] // for storing the actual values
    }

    insert(val) {
        if ( this.valueIndex.has(val) ) {
            return false
        }
        this.valueIndex.set(val, this.values.length)
        this.values.push(val)
        return true;
    };

    remove(val) {
        if(!this.valueIndex.has(val)) {
            return false
        }
        // get the index of the value to be removed
        const index = this.valueIndex.get(val)
        const lastValue = this.values[this.values.length - 1];
        //swap the elemet to be removed with the last element
        this.values[index] = lastValue
        this.valueIndex.set(lastValue, index)
        // remove the last element
        this.values.pop();
        this.valueIndex.delete(val)
        return true
    };

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.values.length)
        return this.values[randomIndex]
    };
}

let randomizedSet = new RandomizedSet();

console.log(randomizedSet.insert(1));  // Returns true
console.log(randomizedSet.remove(2));  // Returns false
console.log(randomizedSet.insert(2));  // Returns true
console.log(randomizedSet.getRandom());  // Returns 1 or 2
console.log(randomizedSet.remove(1));  // Returns true
console.log(randomizedSet.insert(2));  // Returns false
console.log(randomizedSet.getRandom());  // Returns 2
