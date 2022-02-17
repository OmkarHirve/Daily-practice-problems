
let logger = console
const _ = require('lodash')
const jp = require('jsonpath')

var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums1.push(...nums2);

    let counterArray = new Array(Math.max(...nums1));

    for (let i=0; i<m+n; i++) {
        // logger.info('LOG', `LL: merge -> nums1[i]`, nums1[i]);
        if (counterArray[i] === undefined) { counterArray[i] = 0 };

        if (counterArray[nums1[i]] === undefined) {
            counterArray[nums1[i]] = 1;
        }
        else {
            counterArray[nums1[i]] += 1;
        }
    }

    for (let i=0; i<m+n; i++) {
        counterArray[nums1[i]] += 1;
    }
    logger.info('LOG', `LL: merge -> counterArray`, counterArray);


    


};


function main() {
    let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    merge(nums1, m, nums2, n)
    logger.info('LOG', `LL: main -> nums1`, nums1);
}

main()