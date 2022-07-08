var firstMissingPositive = function(nums) {
    nums = nums.sort(function(val1, val2) {
       return val1>val2?1:val1<val2?-1:0; 
    });
    if(nums.length===0||nums[nums.length-1]<=0){ return 1; } // A, B
    for(var i=0,k=1; i<nums.length; ++i){ // C
        if(nums[i]>k){ return k; }
        k = nums[i]<k?k:k+1;
    }
    return nums[nums.length-1]+1; // D
};
