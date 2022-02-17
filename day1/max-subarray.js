let logger = console
const _ = require('lodash')
const jp = require('jsonpath')

var maxSubArray = function(nums) {
    let max = 0, result;

    for(let current of nums) {
        logger.info(`LL: maxSubArray -> current`, current);
        logger.info(`LL: maxSubArray -> current + max`, current + max);
        max = Math.max(current, current + max)
        if (result === undefined || max > result) {
            result = max
        }
        logger.info(`LL: maxSubArray -> max`, max);
        console.log("============================")
    }
    logger.info(`LL: maxSubArray -> max`, result);
    return result;
};

function main() {
    let arr = [1]
    maxSubArray(arr)
}

main()