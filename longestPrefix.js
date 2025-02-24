// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestPrefix(strs) {
    let prefix = strs[0]
    for ( const [index, value] of strs.entries()) {
        if ( index === 0 ) continue;
        while ( !value.startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix;
}

const input = ["flower","flow","flight"]
console.log(longestPrefix(input));