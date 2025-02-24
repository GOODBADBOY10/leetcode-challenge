function maxSubArray(nums) {
    let solution = nums[0]
    for ( let i = 1; i < nums.length; i++ ) {
        // console.log(nums[i]);
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]) 
                            // 1, 1 + 0 = 1, 1 === 1 
                            // 2, 2 + 1 = 3, 3 === 4
                            // 3, 3 + 2 = 5, 5 === 2
        // console.log(nums[i]);
        solution = Math.max(solution, nums[i]);
    }
    return solution;
}

const num = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(num));