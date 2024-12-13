class Solution {
    nextPermutation(arr) {
        let n = arr.length;
        let pivot = -1;

        // Step 1: Find the pivot, which is the first element from the end that is smaller than its next element
        for (let i = n - 2; i >= 0; i--) {
            if (arr[i] < arr[i + 1]) {
                pivot = i;
                break;
            }
        }

        // Step 2: If no pivot is found, reverse the entire array (it's the last permutation)
        if (pivot === -1) {
            arr.reverse();
            return arr;
        }

        // Step 3: Find the smallest element greater than the pivot from the rightmost part of the array
        for (let i = n - 1; i > pivot; i--) {
            if (arr[i] > arr[pivot]) {
                // Swap the pivot and this element
                [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
                break;
            }
        }

        // Step 4: Reverse the sub-array to the right of the pivot
        let left = pivot + 1, right = n - 1;
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left += 1;
            right -= 1;
        }

        return arr;
    }
}
