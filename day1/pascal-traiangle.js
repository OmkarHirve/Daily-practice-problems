let logger = console
const _ = require('lodash')
const jp = require('jsonpath')

/**
 * @param {number} numRows
 * @return {number[][]}
*/
var generate = function(numRows) {
    let mdArray = [];
    for (let i=1; i<=numRows; i++) {
        if (i === 1) { mdArray.push([1]) }
        else if (i === 2) { mdArray.push([1,1]) }
        else {
            let lastRow = mdArray[i-2];
            let nextRow = [1];
            for (let j=0; j<lastRow.length-1; j++) {
                nextRow.push(lastRow[j] + lastRow[j+1])
            }
            nextRow.push(1)
            mdArray.push(nextRow)
        }
    }
    return mdArray
};

function getValueAtParticularPostionFromPascalTriangle(row, col) {
    // formula is
    // (r-1)
    //      C
    //        (c-1)

    return ((row-1)*(row-2))/((col-1)*(col-2))
}

function main() {
    let mdArray = generate(3);
    logger.info(`LL: main -> mdArray`, mdArray);
    let value = getValueAtParticularPostionFromPascalTriangle(1,1)
    logger.info(`LL: main -> value`, value);
    
}

main()