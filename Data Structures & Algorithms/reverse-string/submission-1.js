class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        // let tmp = [];
        // for(let i = s.length - 1; i >= 0; i--){
        //     tmp.push(s[i])
        // }
        // for(let i = 0; i < s.length; i++){
        //     s[i] = tmp[i]
        // }

        // Step 1: Pointers set karna
        let left = 0;
        let right = s.length - 1;

        // Step 2: Loop chalana
        while (left < right) {
            
            // Step 3: Swapping (Adla-badli)
            let temp = s[left]; 
            s[left] = s[right]; 
            s[right] = temp;    

            // Step 4: Pointers ko aage-peeche khiskana
            left++;  
            right--; 
        }
    }
}
