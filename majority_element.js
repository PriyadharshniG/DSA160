class Solution {
    // Function to find the majority elements in the array
    findMajority(arr) {
        let n = arr.length;
        let ele1 = null, ele2 = null;
        let count1 = 0, count2 = 0;

        // Step 1: Find potential candidates
        for (let index = 0; index < n; index++) {
            if (arr[index] === ele1) {
                count1++;
            } else if (arr[index] === ele2) {
                count2++;
            } else if (count1 === 0) {
                ele1 = arr[index];
                count1 = 1;
            } else if (count2 === 0) {
                ele2 = arr[index];
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }

        // Step 2: Validate candidates
        count1 = 0;
        count2 = 0;
        for (let index = 0; index < n; index++) {
            if (arr[index] === ele1) {
                count1++;
            } else if (arr[index] === ele2) {
                count2++;
            }
        }

        // Step 3: Add valid candidates to result
        let res = [];
        if (count1 > Math.floor(n / 3)) {
            res.push(ele1);
        }
        if (count2 > Math.floor(n / 3)) {
            res.push(ele2);
        }

        return res.sort((a, b) => a - b);
    }
}