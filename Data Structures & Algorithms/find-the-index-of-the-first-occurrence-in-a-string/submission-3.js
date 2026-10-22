class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack, needle) {
        if (haystack.length < needle.length) return -1;

        // Pointer 1 (i): The Anchor in the haystack
        for (let i = 0; i <= haystack.length - needle.length; i++) {
            // Pointer 2 (j): The Explorer for the needle
            let j = 0;

            // The Explorer walks forward AS LONG AS the letters match
            while (j < needle.length && haystack[i + j] === needle[j]) {
                j++;
            }

            // Did the Explorer successfully check every letter in the needle?
            if (j === needle.length) {
                return i; // We found the full word! Return the Anchor's position.
            }
        }

        return -1; // Anchor checked everywhere, no match found.
    }
}
