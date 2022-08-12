function solution(a) {
    let teamOne = []
    let teamTwo = []
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if(index % 2 == 0) {
            teamOne.push(element)
        } else {
            teamTwo.push(element)
        }
    }
    let weightOfTeamOne = 0
    for (let index = 0; index < teamOne.length; index++) {
        const element = teamOne[index];
        weightOfTeamOne = weightOfTeamOne + element 
    }
    let weightOfTeamTwo = 0
    for (let index = 0; index < teamTwo.length; index++) {
        const element = teamTwo[index];
        weightOfTeamTwo = weightOfTeamTwo + element 
    }
    result = [weightOfTeamOne,weightOfTeamTwo]
    console.log(result)
    return result
}

const a = [50, 60, 60, 45, 70]

// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

// Example

// For a = [50, 60, 60, 45, 70], the output should be
// solution(a) = [180, 105].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// Guaranteed constraints:
// 1 ≤ a.length ≤ 105,
// 45 ≤ a[i] ≤ 100.

// [output] array.integer