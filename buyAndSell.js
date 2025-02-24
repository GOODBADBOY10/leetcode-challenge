// Best time to buy and sell stock
// say you have an array for which the ith element is the price of a given stock on day i.
// if ypu are only permitted to complete most one transaction(buy one and sell one of the stock)
// design an algorithm to find the maximum profit
// Note: You cannot buy a stock before you can sell one
// Input: [ 7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5
// Not 7 - 1 = 6 as selling price needs to be larger than buying price

function maxProfit(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] > arr[arr.length - 1]) {
            let sortedArray = arr.sort((a, b) => a - b)
            let firstElement = sortedArray[0];
            let lastElement = sortedArray[sortedArray.length - 1]
            let profit = Math.abs(firstElement - lastElement)
            return profit
        } else return 0
    }
    return 0
}

const arr = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(arr))


// I am still finding a way to make the code better cause it doesnt work  a sorted array in descending order