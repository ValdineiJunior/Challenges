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

// Codewriting

// 300

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// solution(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.

// [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
