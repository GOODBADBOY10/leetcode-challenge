// House robber
// Input: [ 1, 2, 3, 1]
// Output: 4
// Explanation: Rob house 1 = 1, rob house 3 = 3 total = 4;


function rob (nums) {
    if (!nums.length) return 0
    if (nums.length === 1 ) return nums[0];
    if (nums.length === 2 ) return Math.max(nums[0], nums[1]);

    for ( let i = 2; i < nums.length; i++ ) {
        nums[i] = Math.max(nums[i - 2] + nums[i], (nums[i - 3] || 0) + nums[i])
        console.log(i);
    }

    return Math.max(nums[nums.length -1], nums[nums.length - 2]);
}
const nums = [ 1, 2, 3, 1]
console.log(rob(nums))