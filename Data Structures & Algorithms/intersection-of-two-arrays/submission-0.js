class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        let res = [];
        //sorting
        nums1.sort((a, b) => a - b);
        nums2.sort((a, b) => a - b);

        let i = 0;
        let j = 0;
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] < nums2[j]) {
                i++;
            } else if (nums2[j] < nums1[i]) {
                j++;
            } else {
                if (res.length === 0 || res.length - 1 !== 0) {
                    res.push(nums1[i]);
                }
                i++;
                j++;
            }
        }
        return res;
    }
}
