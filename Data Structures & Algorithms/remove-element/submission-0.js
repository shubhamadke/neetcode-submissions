class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0; //the trigger. the slow pointer.

        for (let i = 0; i < nums.length; i++) {
            //our fast pointer

            if (nums[i] !== val) {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
}
