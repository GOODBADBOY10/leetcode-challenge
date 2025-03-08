function jumpTime(nums) {
    let maxReachable = 0;    
    for ( let i = 0; i < nums.length; i++ ) {
        if ( i > maxReachable ) {
            return false;
        }
        maxReachable = Math.max(maxReachable, i + nums[i]);
    }
    return true;
}

// const nums = [2, 3, 1, 1, 4]
const nums = [2, 3, 11]
console.log(jumpTime(nums));







// var canJump = function(nums) {
//     let idx = 0;
//     let max = 0;
//     let target = nums.length - 1;
  
//     while(idx < nums.length) {
//       max = Math.max(max, idx + nums[idx]);
      
//       if (max >= target) {
//         return true;
//       }
      
//       if (max <= idx && nums[idx] === 0) {
//         return false;
//       }
      
//       idx++;
//     }
    
//     return false;
//   };