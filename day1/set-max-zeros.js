let logger = console
const _ = require('lodash')
const jp = require('jsonpath')

function setMaxZeros(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let rows_to_set_to_zero = {}, cols_to_set_to_zero = {}
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rows_to_set_to_zero[i] = true;
                cols_to_set_to_zero[j] = true;
            }
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (i in rows_to_set_to_zero || j in cols_to_set_to_zero) {
                matrix[i][j] = 0;
            }
        }
    }


}

function setMaxZeros2(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let isCol = false;
    // currently ignore 1st row and 1st col
    for(let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            isCol = true;
        }
        for(let j = 1; j < n; j++) { // ignoring  0,0 element for now
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (matrix[0][0] === 0) { // setting 1st row to zero. No need to care about col here, above condition will handle that
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0
        }
    }
    if (isCol) { // setting 1st col to zero
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0
        }
    }


}

function main() {

    let arr = [
        [1,2,3],
        [0,5,6],
        [7,8,9]
    ]
    setMaxZeros2(arr);
    logger.info(`LL: main -> arr ---> `);
    logger.info(arr.join("\n"))



}

main()