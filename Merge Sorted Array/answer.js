var merge = function(nums1, m, nums2, n) {
    nums1_withoutZero = nums1.filter(e => e !== 0);
    nums2_withoutZero = nums2.filter(e => e !== 0);

    if( nums1.length === (m + n) & nums2.length === n & m === nums1_withoutZero.length & 0 <= m & n <= 200 &
1 <= m + n <= 200 ){
        return [...nums1_withoutZero, ...nums2_withoutZero].sort((a,b) => a - b);
    } else {
        return "Please enter suitable parameters"
    }
};