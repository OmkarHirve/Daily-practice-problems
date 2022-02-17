let logger = console
const _ = require('lodash')
const jp = require('jsonpath')

const nextPermutation = function (nums) {
    let count = nums.length
    /*
    Step1: Starting from last find first occurrence of index i such that nums[i] < nums[i+1]
    */
    let index1 = null, index2 = null;
    for (let i = count - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index1 = i;
            break;
        }
    }
    // If index1 is null, i.e array is in decending order and is on last permutation, reverse to get correct answer.
    if (index1 === null) {
        nums.reverse();
        return;
    }
    /*
    Step 2: Starting from last index find such a index, that the value for that index is greater than index1. Call this index2
    */
    for (let i = count - 1; i >= 0; i--) {
        if (nums[i] > nums[index1]) {
            index2 = i;
            break;
        }
    }
    logger.info(`LL: nextPermutation -> index1`, index1);
    logger.info(`LL: nextPermutation -> index2`, index2);
    /*
    Step 3: Swap values at index1 and index2
    */
   let temp = nums[index1]
   nums[index1] = nums[index2];
   nums[index2] = temp 
   logger.info(`LL: nextPermutation -> nums`, nums);
    /*
    Step 4: Reverse all values from index (index1 + 1) to last index
    */
    let initial_array = nums.splice(0, index1+1)
    nums.reverse().unshift(...initial_array)
    
};

function main() {
    let nums = [1,3,5,4,2]
    nextPermutation(nums)
    logger.info(`LL: main -> nums`, nums);

}

main()