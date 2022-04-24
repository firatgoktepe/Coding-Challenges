// First Approach

var removeElement = function(nums, val) {
    while (nums.includes(val)){
        nums.splice(nums.indexOf(val),1);
    }
    return nums.length;
};

// Second Approach
var removeElement = function(nums, val) {
    return nums.filter( e => e !== val).length
};

