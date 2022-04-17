var findNumbers = function(nums) {
    let splitted = nums.map(e => e.toString());
    let filtered = splitted.filter( e => e.length % 2 == 0 ).length;
    return filtered;
};