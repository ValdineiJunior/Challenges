function processData(input) {
  const operationSplitOrCombine = input.slice(0, 1)
  const typeMethodOrClassOrVariable = input.slice(2, 3)
  const words = input.slice(4)
  let wordsInLowerCase = words.toLowerCase()
  let combineWords = ''
  let result
  let arrayWords = words.split('')
  let arrayWordsLowerCase = wordsInLowerCase.split('')
  let arrayIndex = []
  let combineWords2 = ''
  
    function combineWordsWithFirstCharInUpperCase(words)
   {
    let arrayWords = words.split(' ')
    arrayWords.map(element => {
      firstCharInUpperCase = element.slice(0, 1).toUpperCase()
      restOfTheWord = element.slice(1)
      wordInCamelCase = firstCharInUpperCase.concat(restOfTheWord)
      combineWords = combineWords.concat(wordInCamelCase)
      return combineWords
    })
  }

  function formatAsMethod(combineWords) {
    switch (typeMethodOrClassOrVariable) {
      case 'M':
        firstCharInLowerCase = combineWords.slice(0, 1).toLowerCase()
        restOfTheWord = combineWords.slice(1)
        wordInCamelCase = firstCharInLowerCase
          .concat(restOfTheWord)
          .concat('()')
        result = wordInCamelCase
        break
      case 'C':
        result = combineWords
        break
      case 'V':
        firstCharInLowerCase = combineWords.slice(0, 1).toLowerCase()
        restOfTheWord = combineWords.slice(1)
        wordInCamelCase = firstCharInLowerCase.concat(restOfTheWord)
        result = wordInCamelCase
        break
      default:
        console.log('invalid parameter')
        break
    }
    return result
  }

  function turnStringInArray () {
    for (let index = 0; index < arrayWords.length; index++) {
        const elementWords = arrayWords[index]
        const elementLowerCase = arrayWordsLowerCase[index]
        if (elementWords !== elementLowerCase) {
          arrayIndex.push(index)
        }
      }
  }

  function splitWordsAndFormatToLowerCase() {

    turnStringInArray()
        
      arrayWordsWithSpaces = arrayWordsLowerCase
      verifyIfFirstCharIsUpperCase = arrayIndex.findIndex(element => element === 0)  
      if (verifyIfFirstCharIsUpperCase !== -1) {
        arrayIndex = arrayIndex.slice(1)
      }

      arrayIndex.map(element => {
        arrayWordsWithSpaces.splice(element, 0, ' ')
      })
      arrayWordsWithSpaces.map(element => {
        firstCharInLowerCase = element.slice(0, 1).toLowerCase()
        restOfTheWord = element.slice(1)
        wordWithSpaces = firstCharInLowerCase.concat(restOfTheWord)
        combineWords2 = combineWords2.concat(wordWithSpaces)
        result = combineWords2
        return result
      })
  
      
      // console.log(result)
      return result

  }

  if (operationSplitOrCombine === 'S') {

    switch (typeMethodOrClassOrVariable) {
        case 'M':
            splitWordsAndFormatToLowerCase()
            result = result.slice(0,-2)
          break
        case 'C':
            splitWordsAndFormatToLowerCase()
          break
        case 'V':
            splitWordsAndFormatToLowerCase()
        
          break
        default:
          console.log('invalid parameter')
          break
      }
      return result

    
  } else if (operationSplitOrCombine === 'C') {
    combineWordsWithFirstCharInUpperCase(words)
    formatAsMethod(combineWords)
    
    return result
  }
  console.log(result)
  return result
}



const input = 'C;C;mouse pad mouse pad'
const input2 = 'S;V;iPad'
const input3 = 'C;M;mouse pad'
const input4 = 'C;C;code swarm'
const input5 = 'S;C;OrangeHighlighter'
const input6 = 'S;M;plasticCup()'



console.log(processData(input))
console.log(processData(input2))
console.log(processData(input3))
console.log(processData(input4))
console.log(processData(input5))
console.log(processData(input6))


// Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

// Your task is to write a program that creates or splits Camel Case variable, method, and class names.

// Input Format

// Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
// The operation will either be S (split) or C (combine)
// M indicates method, C indicates class, and V indicates variable
// In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
// In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
// Output Format

// For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).
// Sample Input

// S;M;plasticCup()

// C;V;mobile phone

// C;C;coffee machine

// S;C;LargeSoftwareBook

// C;M;white sheet of paper

// S;V;pictureFrame

// Sample Output

// plastic cup

// mobilePhone

// CoffeeMachine

// large software book

// whiteSheetOfPaper()

// picture frame

// Explanation

// Use Scanner to read in all information as if it were coming from the keyboard.

// Print all information to the console using standard output (System.out.print() or System.out.println()).

// Outputs must be exact (exact spaces and casing).
