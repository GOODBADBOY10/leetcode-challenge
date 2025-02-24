// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

 

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is substring of another string.

// function substrings(words) {
//     const string = new Set(words)
//     const result = new Set();
//     for (const word of words) {
//         // console.log(word)
//         for ( let i = 1; i <= word.length; i++ ) {
//             // console.log(word[i])
//             let substring = word.substring(0, i);
//             // console.log(substring)
//             if ( string.has(substring) && substring !== word ) {
//                 const answer = result.add(word)
//                 // console.log(answer)
//                 break;
//             }
//         }
//     }
//     return Array.from(result);
// }

function substring(words) {
    const string = new Set(words)
    const result = new Set()

    for ( const word of words ) {
        // console.log(word)
        for ( const anotherWord of string ) {
            // console.log(anotherWord)
            if (word !== anotherWord && anotherWord.includes(word) ) {
                result.add(word);
                break;
            }
        }
    }
    return Array.from(result);
}


const words = ["mass","as","hero","superhero"]
// const words = ["leetcode","et","code"]
// const words = ["blue","green","bu"]
console.log(substring(words))
