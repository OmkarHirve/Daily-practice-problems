let logger = console
const _ = require('lodash')
const jp = require('jsonpath')

/** Approach 1: Using counting sort. Takes more memory. And since inputs values 0,1,2 are defined, we probably dont need it.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let atbsorted = nums.concat([]);

    let length_of_original_array = nums.length;
    let counterArray = new Array(length_of_original_array);

    // ===================================================
    // Step 1: Set up occurence of every value in counterArray, considering value as the index
    for (let i = 0; i < length_of_original_array; i++) {
        if (counterArray[i] === undefined) {
            counterArray[i] = 0;
        }

        if (counterArray[atbsorted[i]] === undefined) {
            counterArray[atbsorted[i]] = 1;
        }
        else {
            counterArray[atbsorted[i]] += 1
        }
    }
    // ====================================================

    // Step 2: Need to find actual position in sorted array.
    for (let i = 1; i < length_of_original_array; i++) {
        counterArray[i] = counterArray[i] + counterArray[i - 1]
    }
    // ====================================================

    // Step 3: Shifting the whole counterArray to the right, by one bit.
    counterArray.pop()
    counterArray.unshift(0)
    // ====================================================

    /* Step 4: Create resultant array with same size as original array,
    iterate over original array,
    and based on counterArray,
    place the value at the index in counterArray, and increment the value of counterArray by 1
    */
    for (let number of atbsorted) {
        let index_of_num_from_counterArray = counterArray[number]; // index we need to put num in resultant array.
        counterArray[number] += 1;
        nums[index_of_num_from_counterArray] = number;
    }
};

let swap = function(nums, index1, index2) {
    let temp = nums[index1]
    nums[index1] = nums[index2];
    nums[index2] = temp;
}

/** Approach 2: Using dutch national flag algorithm, as number of elements are three
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors2 = function (nums) {

    let lowPointer = 0, midPointer = 0, highPointer = nums.length-1;

    while(midPointer <= highPointer) { // i.e. midPointer should move beyond highPointer for array to stop
        switch (nums[midPointer]) {
            case 0:
                swap(nums, lowPointer, midPointer)
                lowPointer++;
                midPointer++;
                break
            case 1:
                midPointer++;
                break
            case 2:
                swap(nums, midPointer, highPointer)
                highPointer--;
                break
        }
    }
    logger.info(`LL: nums`, nums);
}


function main() {
    let nums = [1,2,0]
    sortColors2(nums)
}

main()