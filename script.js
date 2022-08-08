<<<<<<< HEAD
function solution(matrix) {
    let result = 0
    console.log(matrix.length)
    for (let i = 0; i < matrix.length-1; i++) {
        arrayOfMatrix = matrix[i]
        for (let j = 0; j < arrayOfMatrix.length; j++) {
            const element = matrix[i][j]
            const elementBeneath = matrix[i+1][j]
            console.log('result',result)
            console.log('element',element)
            console.log('element beneath',elementBeneath)
            if (i == 0) {
                result = result + element
            }
            if (element != 0) {
                result = result + elementBeneath
            }
        }
        
    }
    console.log(result)
}

const matrix = [[0, 1, 1, 2], 
                [0, 5, 0, 0], 
                [2, 0, 3, 3]]

solution(matrix)
=======
function solution(sequence) {
  result = false
  ChecksIfTheArrayIsStrictlyIncreasingByCheckingFromTheEndToTheBeginning()
  if (result == true) {
    return result
  }
  ChecksIfTheArrayIsStrictlyIncreasingByCheckingFromTheBeginningToTheEnd()
  return result

  function ChecksIfTheArrayIsStrictlyIncreasingByCheckingFromTheEndToTheBeginning() {
    let sequenceWithoutEnd =
      cutTheCorrectElementsFromTheEndOfTheSequence(sequence)
    removePenultimateElementOfArray(sequenceWithoutEnd)
    let sequenceWithoutStart =
      cutTheCorrectElementsFromTheBeginningOfTheSequence(sequenceWithoutEnd)
    checkIfThereIsASingleElementLeftInTheArray(sequenceWithoutStart)
  }

  function ChecksIfTheArrayIsStrictlyIncreasingByCheckingFromTheBeginningToTheEnd() {
    sequenceWithoutStart =
      cutTheCorrectElementsFromTheBeginningOfTheSequence(sequence)
    removeTheSecondElementFromTheArray(sequenceWithoutStart)
    sequenceWithoutEnd =
      cutTheCorrectElementsFromTheEndOfTheSequence(sequenceWithoutStart)
    checkIfThereIsASingleElementLeftInTheArray(sequenceWithoutEnd)
  }

  function cutTheCorrectElementsFromTheEndOfTheSequence(sequence) {
    let modifiedSequence = [...sequence]
    for (let index = sequence.length - 1; index > 0; index--) {
      const element = sequence[index]
      const previousElementToCompare = sequence[index - 1]
      if (element <= previousElementToCompare) {
        break
      } else {
        modifiedSequence.pop()
      }
    }
    return modifiedSequence
  }

  function removePenultimateElementOfArray(sequence) {
    let element = sequence[sequence.length - 1]
    sequence.pop()
    sequence.pop()
    sequence.push(element)
  }

  function cutTheCorrectElementsFromTheBeginningOfTheSequence(sequence) {
    let modifiedSequence = [...sequence]
    for (let index = 0; index < sequence.length - 1; index++) {
      const element = sequence[index]
      const nextElementToCompare = sequence[index + 1]
      if (element >= nextElementToCompare) {
        break
      } else {
        modifiedSequence.shift()
      }
    }
    return modifiedSequence
  }

  function removeTheSecondElementFromTheArray(sequence) {
    let element = sequence[0]
    sequence.shift()
    sequence.shift()
    sequence.unshift(element)
  }

  function checkIfThereIsASingleElementLeftInTheArray(sequence) {
    if (sequence.length <= 1) {
      result = true
    }
  }
}

sequence = [3, 5, 67, 98, 3]
solution(sequence)
>>>>>>> 940028abc23dcfc2b28550aebef26a46ac733654

// Codewriting

// 300

// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

// Example

// For

// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]
// the output should be
// solution(matrix) = 9.

// example 1

// There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.

// For

// matrix = [[1, 1, 1, 0], 
//           [0, 5, 0, 1], 
//           [2, 1, 3, 10]]
// the output should be
// solution(matrix) = 9.

// example 2

// Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it). Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.array.integer matrix

// A 2-dimensional array of integers representing the cost of each room in the building. A value of 0 indicates that the room is haunted.

// Guaranteed constraints:
// 1 ≤ matrix.length ≤ 5,
// 1 ≤ matrix[i].length ≤ 5,
// 0 ≤ matrix[i][j] ≤ 10.

// [output] integer

<<<<<<< HEAD
// The total price of all the rooms that are suitable for the CodeBots to live in.
=======
// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
>>>>>>> 940028abc23dcfc2b28550aebef26a46ac733654
