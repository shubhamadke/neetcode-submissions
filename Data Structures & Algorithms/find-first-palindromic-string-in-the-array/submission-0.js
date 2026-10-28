class Solution {
    /**
     * @param {string[]} words
     * @return {string}
     */

    isPalindrome(word) {
        let left = 0;
        let right = word.length - 1;

        while (left < right) {
            if (word[left] !== word[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    firstPalindrome(words) {
        for (let i = 0; i < words.length; i++) {
            if (this.isPalindrome(words[i])) {
                return words[i];
            }
        }
        return "";
    }
}
