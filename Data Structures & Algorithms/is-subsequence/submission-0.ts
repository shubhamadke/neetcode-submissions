class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
       let i = 0; // s ke liye pointer
let j = 0; // t ke liye pointer

while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
        i++; // Match mila! Choti string mein aage badho
    }
    j++; // Badi string mein hamesha aage badhna hi hai
}

// Agar i apne end tak pohoch gaya, matlab saare letters mil gaye
return i === s.length;
    }
}
