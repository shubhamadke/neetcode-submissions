class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let res = new Array(nums.length);

        let left = 0;
        let right = nums.length - 1;
        let writer = nums.length - 1;

        while (left <= right) {
            let leftSquare = nums[left] * nums[left];
            let rightSquare = nums[right] * nums[right];

            if (leftSquare > rightSquare) {
                res[writer] = leftSquare;
                left++;
            } else {
                res[writer] = rightSquare;
                right--;
            }
            writer--;
        }
        return res;
    }
}
