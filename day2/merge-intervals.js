let logger = console
const _ = require('lodash')
const jp = require('jsonpath');

function sort2DArray(array) {
    array.sort((a, b)=> {
        return a[0]-b[0];
    })
    logger.info('LOG', `LL: functionsort2DArray -> array`, JSON.stringify(array));
}


var merge1 = function(intervals, isArraySorted=false) {
    
    if (!isArraySorted) {
        sort2DArray(intervals);
        isArraySorted = true;
    }
    let len = intervals.length;
    for (let i=0; i<len-1; i++) {
        let [startI, endI] = intervals[i];
        if (!intervals[i+1]) {
            break
        }
        let [startJ, endJ] = intervals[i+1];

        if (endI >= startJ) {
            logger.info('LOG', `LL: BEFORE 1-> intervals`, intervals);

            intervals.shift();
            intervals.shift();
            intervals.unshift([startI, Math.max(endI, endJ)]);
            merge1(intervals, isArraySorted)
            logger.info('LOG', `LL: merge 1-> intervals`, intervals);
            break;
        }
        else {
            logger.info('LOG', `LL: BEFORE 2-> intervals`, intervals);
            logger.info('LOG', `LL: endI`, endI);
            logger.info('LOG', `LL: startI`, startI);

            intervals.shift();
            intervals.shift();
            intervals.unshift([startI, endI]);
 
            logger.info('LOG', `LL: merge 2-> intervals`, intervals);

        }
    }
    return intervals
};

var merge = function(intervals) {
    if(!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    logger.info('LOG', `LL: merge -> result 1 --> `, result);
    
    for(let [start, end] of intervals) {
        let endJ = result[result.length - 1][1]
        if(start <= endJ) {
            const [startPrev, endPrev] = result.pop();
            result.push([startPrev, Math.max(end, endPrev)]);
        } else {
            result.push([start, end])
        }
    }
    return result;
};

function main() {
    // let intervals = [[1,3],[2,6],[8,10],[15,18]] // correct
    // let intervals =[[1,4],[0,2],[3,5]] // correct
    // let intervals =[[1,4],[0,1]] // correct
    // let intervals =[[1,4],[0,4]] // correct
    // let intervals =[[1,4],[2,3]] // wrong
    // let intervals = [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]
    let intervals = [[1,3],[2,2],[2,2],[2,3],[3,3],[4,6],[5,7]]
    let x = merge1(intervals)
    logger.info(`LL: main -> res`, x);
}

main()