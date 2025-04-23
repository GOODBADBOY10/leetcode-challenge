// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);


// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

function convert(s, numRows) {

    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    let rows = new Array(numRows).fill('');
    let dir = 1;
    let row = 0;

    for (let i = 0; i < s.length; i++) {
        rows[row] += s[i];

        if (row === 0) {
            dir = 1;
        } else if (row === numRows - 1) {
            dir = -1;
        }

        row += dir;
    }


    return rows.join(' ');
}

const s = "PAYPALISHIRING"
// const s = "A"
// console.log(s.length)
const numRows = 3
// const numRows = 1
console.log(convert(s, numRows));