class Solution {
    // Function to reverse the array.
    reverseArray(arr) {
        let left = 0;
        let right = arr.length - 1;
        
        while (left < right) {
            // Swap arr[left] and arr[right]
            [arr[left], arr[right]] = [arr[right], arr[left]]; 
            left += 1;
            right -= 1;
        }
        
        return arr;
    }
}