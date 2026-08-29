class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        // Step 1: Ek khali dabba banao sabki ginti rakhne ke liye
        const count = {};

        // Step 2: Pehla loop - Sabki ginti (frequency) note kar lo
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            // Agar pehle se hai toh +1 karo, nahi toh 1 likh do
            count[char] = (count[char] || 0) + 1;
        }

        // Step 3: Dusra loop - Dhundho kiska count sirf 1 hai
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            if (count[char] === 1) {
                return i; // Jo sabse pehle 1 count wala mile, uski position bhej do
            }
        }

        return -1; // Agar koi 1 wala nahi mila
    }
}
