class Solution {
    backspaceCompare(s, t) {
        // Compare the final processed versions of both strings
        return this.buildEditor(s) === this.buildEditor(t);
    }

    // HELPER: Simulates a person typing on a keyboard
    buildEditor(str) {
        let stack = []; // Our initially empty editor
        
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== '#') {
                // It's a normal letter, type it into the editor
                stack.push(str[i]); 
            } else {
                // It's a backspace! Delete the last letter we typed.
                // (In JS, if the stack is already empty, pop() just does nothing safely)
                stack.pop(); 
            }
        }
        
        // Glue the surviving letters back together into a real string
        return stack.join(''); 
    }
}