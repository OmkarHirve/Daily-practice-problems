let logger = console
const _ = require('lodash')
const jp = require('jsonpath')

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0];
    for (let price of prices) {
        if (price < min) {
            min = price;
        }

        if ((price - min) > profit) {
            profit = price - min
        }
    }
    return profit;
};

function main() {
    let prices = [3,3,5,0,0,3,1,4]
    let max_Profit = maxProfit(prices)
    logger.info(`LL: main -> maxProfit`, max_Profit);
}

main()