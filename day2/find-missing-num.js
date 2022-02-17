let logger = console
const _ = require('lodash')
const jp = require('jsonpath')

var missingNumber = function(nums) {
    let max = nums.length;
    let actual_sum = 0, expected_sum = 0;
    for (let i=1,j=0; i<=max && j<max; i++, j++) {
        actual_sum += nums[j];
        expected_sum += i;
    }
    logger.info('LOG', `LL: missingNumber -> expected_sum`, expected_sum);
    logger.info('LOG', `LL: missingNumber -> actual_sum`, actual_sum);
    return expected_sum - actual_sum;  
};

function main() {
    let nums = [0,1];
    let result = missingNumber(nums)
    logger.info('LOG', `LL: main -> result`, result);
}

main()