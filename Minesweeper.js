function solution(matrix) {
    let boardWhithBorder = []
    while (boardWhithBorder.length < matrix.length+2) {
        let line = []
        while (line.length < matrix[0].length+2) {
            line.push(0)
        }
        boardWhithBorder.push(line)
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j]) {
                boardWhithBorder[i][j]++
                boardWhithBorder[i][j+1]++
                boardWhithBorder[i][j+2]++
                boardWhithBorder[i+1][j]++
                boardWhithBorder[i+2][j]++
                boardWhithBorder[i+2][j+1]++
                boardWhithBorder[i+2][j+2]++
                boardWhithBorder[i+1][j+2]++  
            }
        }
    }
    let board = []
    while (board.length<matrix.length) {
        board.push(boardWhithBorder[board.length+1].slice(1,-1))
    }
    console.log(board)
    return board
}

const matrix = 
[[true, false, false,],
[false, true, false],
[false, false, false],]

solution(matrix)
// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// solution(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]
// Check out the image below for better understanding:



// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.boolean matrix

// A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

// Guaranteed constraints:
// 2 ≤ matrix.length ≤ 100,
// 2 ≤ matrix[0].length ≤ 100.

// [output] array.array.integer

// Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.