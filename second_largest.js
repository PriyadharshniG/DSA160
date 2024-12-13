class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        if (arr.length < 2) {
            return -1; // No second largest if fewer than 2 elements
        }

        // Find the largest element
        let max = Math.max(...arr);

        // Filter out all occurrences of the largest element
        let filteredArr = arr.filter(num => num !== max);

        // If no elements remain after filtering, return -1
        if (filteredArr.length === 0) {
            return -1;
        }

        // Find the new maximum, which is the second largest
        return Math.max(...filteredArr);
    }
}

