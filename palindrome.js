function isPalindrome(x) {
    let toString = String(x);
    let reverse = toString.split('').reverse().join('');
    if (reverse === toString ) {
        return true
    } else {
        return false
    }
}

const input = -121
console.log(isPalindrome(input));