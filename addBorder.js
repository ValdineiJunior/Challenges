function solution(picture) {
    let lengthOfEachElementInArray = picture[0].length
    let lengthBorderTopAndBottom = lengthOfEachElementInArray + 2
    borderTopAndBottom = ''
    while (borderTopAndBottom.length < lengthBorderTopAndBottom) {
        borderTopAndBottom = borderTopAndBottom + '*'
    }
    for (let index = 0; index < picture.length; index++) {
        const element = picture[index];
        const elementWhithBorder = '*' + element + '*'
        picture[index] = elementWhithBorder
    }
    picture.push(borderTopAndBottom)
    picture.unshift(borderTopAndBottom)
    console.log(picture)
    return picture
}

const picture = ["abc",
"ded"]

solution(picture)

// Codewriting

// 300

// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// solution(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string picture

// A non-empty array of non-empty equal-length strings.

// Guaranteed constraints:
// 1 ≤ picture.length ≤ 100,
// 1 ≤ picture[i].length ≤ 100.

// [output] array.string

// The same matrix of characters, framed with a border of asterisks of width 1.