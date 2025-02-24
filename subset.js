// You are given two string arrays words1 and words2.

// A string b is a subset of string a if every letter in b occurs in a including multiplicity.

// For example, "wrr" is a subset of "warrior" but is not a subset of "world".
// A string a from words1 is universal if for every string b in words2, b is a subset of a.

// Return an array of all the universal strings in words1. You may return the answer in any order.

 

// Example 1:

// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]
// Output: ["facebook","google","leetcode"]
// Example 2:

// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]
// Output: ["apple","google","leetcode"]


function wordSubset(words1, words2) {
    // const answer = words2.map(char => {
    //     const words = words1.find(word => words1.includes(char))
    //     return words
    // })
    // return answer
    const result = words1.filter(word => words2.every(char => word.includes(char)));
    return result;
}


const words1 = ["amazon","apple","facebook","google","leetcode"]
const words2 = ["l","e"]
console.log(wordSubset(words1, words2))