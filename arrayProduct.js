// Product of Array except itself
// Given an array of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i]
// Input: [ 1, 2, 3, 4 ]
// Output: [ 24, 12, 8, 6 ]

function array(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for ( let j = 0; j < nums.length; j++) {
            if ( i !== j ) {
                product *= nums[j]
            }
        }
        result.push(product);
    }
    return result;
}

const nums = [ 1, 2, 3, 4 ]
console.log(array(nums));

