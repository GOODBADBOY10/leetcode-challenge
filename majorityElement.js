// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums) {
    let counter = 0;
    let majority = null;
    for ( let num of nums) {
        if (counter === 0 ) {
            // elem = 3 counter = 0 majority = 3 counter = 1
            // elem = 2 counter = 0 majority = 2 counter = 1
            // elem = 3 counter = 0 majority = 3 counter = 1
            majority = num;
            counter = 1;
            console.log(counter);
        } else if ( majority === num ) {
            counter++;
        } else {
            counter--;
        }
    }
    return majority;
}

// const nums = [2,2,1,1,1,2,2]
const nums = [3,2,3]
console.log(majorityElement(nums));