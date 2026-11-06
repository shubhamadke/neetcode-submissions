class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const getNext = (num) => {
            let sum = 0;
            while (num > 0) {
                let digit = num % 10; // Grab the last digit
                sum += digit * digit; // Square it and add
                num = Math.floor(num / 10); // Chop off the last digit
            }
            return sum;
        };

        let slow = n;
        let fast = getNext(n);

        while (fast !== slow && slow !== fast) {
            slow = getNext(slow);
            fast = getNext(getNext(fast));
        }
        return fast === 1;
    }
}
