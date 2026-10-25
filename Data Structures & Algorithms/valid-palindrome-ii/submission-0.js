class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isStrictPalindrome(s, L, R) {
        while (L < R) {
            if (s[L] !== s[R]) {
                return false; // Any mismatch here means instant failure!
            }
            L++;
            R--;
        }
        return true; // Survived without cheating!
    }
    validPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (s[left] != s[right]) {
                return (
                    this.isStrictPalindrome(s, left + 1, right) ||
                    this.isStrictPalindrome(s, left, right - 1)
                );
            }
            left++;
            right--;
        }
        return true;
    }
}
