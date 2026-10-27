class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    applyOperations(nums) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i + 1] && nums[i] !== 0) {
                nums[i] = nums[i] * 2;
                nums[i + 1] = 0;
            }
        }

        let writer = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                let temp = nums[writer];
                nums[writer] = nums[i];
                nums[i] = temp;

                writer++;
            }
        }
        return nums;
    }
}
