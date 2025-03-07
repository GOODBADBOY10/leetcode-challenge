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