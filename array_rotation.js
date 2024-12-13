class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    rotateArr(arr, d) {
        let n = arr.length;
        d = d % n; // Handle cases where d >= n

        if (d === 0) return arr; // No rotation needed if d is 0

        // Function to calculate GCD
        function gcd(a, b) {
            if (b === 0) return a;
            return gcd(b, a % b);
        }

        let cycles = gcd(n, d); // Number of cycles we need to handle

        for (let i = 0; i < cycles; i++) {
            let start = arr[i];
            let current = i;

            while (true) {
                let next = (current + d) % n;
                if (next === i) {
                    break;
                }
                arr[current] = arr[next];
                current = next;
            }
            arr[current] = start;
        }

        return arr;
    }
}