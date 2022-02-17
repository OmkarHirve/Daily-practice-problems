let logger = console
const _ = require('lodash')
const jp = require('jsonpath')

/** Rotate matrix clockwise
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    
    // Taking transpose of a matrix along its left daigonal
    let len = matrix.length;
    for (let r=0;r<len;r++) {
        for (let c=r;c<len; c++) {
            if (r === c) {
                continue;
            }
            let temp = matrix[r][c];
            matrix[r][c] = matrix[c][r];
            matrix[c][r] = temp;
        }
    }
    logger.info('LOG', `LL: Transposed matrix is  -> matrix`);
    logger.info(matrix.join("\n"))

    for (let row in matrix) {
        matrix[row].reverse()
    }
    logger.info('LOG', `LL: Rotated matrix is  -> matrix`);
    logger.info(matrix.join("\n"))
    
};

let min = function(a,b) {
    if (a < b) {
        logger.info('LOG', `LL: min -> a`, a);
        return a;
    }
    logger.info('LOG', `LL: min -> b`, b);
    return b;
}

/** Rotate matrix anti-clockwise
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotateLeft = function(matrix) {
    
    // Taking transpose of a matrix along its right daigonal
    // starting from (n,n) index of matrix, and moving towards n-1 along the row.
    // no need to go beyond daigonal, and hence when r+c == max_index_in_array, then that is daignoal element
    // min(r,c) needs to subs from row and col indexes, as we are following path, max to min
    // swapping
    let len = matrix.length;
    let max_index_in_array = len-1;
    // for (let r = len-1; r >= 0; r--) {
    //     for (let c = len-1; r+c > max_index_in_array; c--) {
    //         let swap = min(r,c) //value_to_subs_for_swap
    //         let temp = matrix[r][c];
            
    //         logger.info('LOG', `LL: rotateLeft -> index ${r},${c} to be swapped with ${r-swap},${c-swap}`);

    //         matrix[r][c] = matrix[r-swap][c-swap];
    //         matrix[r-swap][c-swap] = temp;

    //     }
    // }

    
};

function main() {
    // let matrix = [
    //     [5,1,9,11],
    //     [2,4,8,10],
    //     [13,3,6,7],
    //     [15,14,12,16]
    // ]
    let matrix = [
        [ 1, 2, 3, 4, 5],
        [ 6, 7, 8, 9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ]
    // let matrix = [
    //     [1,2,3],
    //     [4,5,6],
    //     [7,8,9]
    // ]
    // rotate(matrix)
    rotateLeft(matrix)
    
}

main()