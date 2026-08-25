class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        const x = s.trim().split(" ")
        return x.pop().length
        // return x.at(-1).length
        // return x[x.length - 1].length
    }
    
}
