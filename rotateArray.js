// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

function rotateArray(nums, k) {
    // Create a temporary array to store the rotated elements.
    let tempArray = new Array(nums.length);
    // console.log(tempArray);

    // Calculate the effective rotation positions.
    k = k % nums.length;
    // console.log(k);

    // Copy elements from the original array to the temporary array.
    for (let i = 0; i < nums.length; i++) {
        // Calculate the new index.
        let newIndex = (i + k) % nums.length;
        tempArray[newIndex] = nums[i];
    }

    // Return the rotated array.
    return tempArray;

}

var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    const rotated = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }    
};
// const nums = [-1, -100, 3, 99]
let k = 3
const nums = [1,2,3,4,5,6,7]
console.log(rotateArray(nums, k))