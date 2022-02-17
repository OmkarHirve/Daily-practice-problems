let logger = console
const _ = require('lodash')
const jp = require('jsonpath')

var findDuplicate = function(nums) {
    // flloyd warshal alogrithm

    let slow = nums[0], fast = nums[nums[0]];
    logger.info('LOG', `LL: findDuplicate -> fast`, fast);
    logger.info('LOG', `LL: findDuplicate -> slow`, slow);
    
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    logger.info('LOG', `LL: findDuplicate -> fast`, fast);
    logger.info('LOG', `LL: findDuplicate -> slow`, slow);
    slow = 0
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    logger.info('LOG', `LL: findDuplicate -> nums`, nums);

    return slow;
};

function main() {
    let nums = [1,3,4,2,2];
    let r = findDuplicate(nums);
    logger.info('LOG', `LL: main -> r`, r);
}

main()
