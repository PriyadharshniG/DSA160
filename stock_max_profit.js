maximumProfit(prices) {
    let n = prices.length;
    let res = 0;

    // Iterate through the price array to calculate profit
    for (let i = 1; i < n; i++) {
        // Add profit for every positive difference
        if (prices[i] > prices[i - 1]) {
            res += prices[i] - prices[i - 1];
        }
    }

    return res;
}