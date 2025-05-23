// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.



// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.


// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.


var lengthOfLastWord = function (s) {
    let result = 0;
    const words = s.replace(".", "")
    .replace(",", "")
    .replace("!", "")
    .replace("?", "")
    .replace(";", "")
    .replace(":", "")
    .split(" ")
    .filter(Boolean);
            // console.log(words);
            for(let i = 0; i < words.length; i++ ) {
                // console.log(words[words.length - 1].length);
                result = words[words.length - 1].length;
            }
    return result;
};


// const s = "   fly me   to   the moon  "
const s = "Hello World"
console.log(lengthOfLastWord(s));
