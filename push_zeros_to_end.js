class Solution {
    pushZerosToEnd(arr) {
        let count = 0; // Initialize count to keep track of non-zero elements

        // Move non-zero elements to the beginning of the array
        for (let i = 0; i < arr.length; i++) { // Use i < arr.length
            if (arr[i] !== 0) {
                arr[count] = arr[i];
                count++;
            }
        }

        // Fill the remaining positions with zeros
        while (count < arr.length) { // Use count < arr.length
            arr[count] = 0;
            count++;
        }

        return arr; // Return the modified array
    }
}
