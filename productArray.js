// Given an integer array nums, return an array answer such that answer[i] is equal to 
// the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function productExceptSelf(arr) {
    let result = []
    for ( let i = 0; i < arr.length; i++ ) {
        // console.log(arr[i]);
        let product = 1
        for ( let j = 0; j < arr.length; j++ ) {
            // console.log(arr[j]);
            if ( i !== j ) {
                product *= arr[j]
            }
        } 
        result.push(product);
    }
    return result;
}


const arr = [1, 2 , 3, 4 ]
console.log(productExceptSelf(arr));



// The trick with this one, as is the case with many array-based problems, 
// is to find a key insight about how the math works out at each position.

// Consider the example input: [1,2,3,4]

// And its output: [24,12,8,6]

// Let's ignore the first index, since it'll end up being a special case. Look at input[1],
//  which has a value of 2. The output we want is 12, which we can get with 1 * 3 * 4, all the elements except 2.

// The key insight is that it's not just 1 * 3 * 4 that we want, but rather, 
// we want product of all left elements * product of all right elements, which in this case is (1) * (3 * 4). If, 
// for every index in the input array, we knew the product of all elements to its left, and the product of all elements to its right,
//  we could determine the product of the array except itself - without having to use a division operation, as the problem asked us to.

// Let's talk about the straightforward way to approach this, and then we can dig into the optimized space solution afterwards

// Building Prefix and Suffix Arrays
// We can solve this problem in linear time and space with three passes:
var productExceptSelf = function(nums) {
    // First, create a prefix array that moves from the left,
    // gathering the running product of the prefix at each index
    const prefix = []
    
    // Move left in the input array
    for (let i=0; i<nums.length; i++) {
        // If i === 0, start with `1`, since there is no prefix
        if (i===0) {
            prefix[i] = 1
        } else {
            // Otherwise, multiply nums[i-1] times the prefix at position i-1,
            // and add that to the prefix array at position i
            prefix[i] = nums[i-1] * prefix[i-1]
        }
    }
    
    // Then, let's create a suffix array
    const suffix = []
    
    // Move right in the input array
    for (let i=nums.length - 1; i>=0; i--) {
        // For the last index, we have no suffix, so just add a 1 to that position
        if (i===nums.length - 1) {
            suffix[i] = 1
        } else {
            // Otherwise, we multiply nums[i+1] by the suffix at position i+1
            // and add that to the suffix array at position i
            suffix[i] = nums[i + 1] * suffix[i + 1]
        }
    }
    
    // Finally, our result array should be the products of prefix * suffix for each position
    const result = []
    
    for (let i=0; i<nums.length; i++) {
        result[i] = prefix[i] * suffix[i]
    }
    
    return result
};