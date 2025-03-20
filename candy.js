// There are n children standing in a line. 
// Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

 

// Example 1:
// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.


// Example 2:
// Input: ratings = [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
// The third child gets 1 candy because it satisfies the above two conditions.

function candies(rating) {
    const candy = rating.length;
    // console.log(candy);
    if (candy === 1) return 1
    let candies = new Array(candy).fill(1); 
    for ( let i = 1; i < candy; i++ ) {
        if (rating[i] > rating[i - 1]) {
            candies[i] = candies[i - 1] + 1
            // console.log(candies);
        } 
    }
    for ( let i = candy - 2; i >= 0; i-- ) {
        if (rating[i] > rating[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
            console.log(candies);
        } 
    }
    return candies.reduce((acc, cand) => acc + cand, 0);
}

const ratings = [1,2,2]
// const ratings = [1,0,2]
console.log(candies(ratings))