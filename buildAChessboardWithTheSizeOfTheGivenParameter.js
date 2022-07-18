function buildAChessboardWithTheSizeOfTheGivenParameter(size) {

    const sizeOfXadrez = size
    let chess = ''
    function addSpace() {
        chess = chess + ' '
    }
    
    function addHashTag() {
        chess = chess + '#'
    }
    
    function addLineBreak() {
        chess = chess + '\n'
    }
    
    for (let index = 1; index <= (sizeOfXadrez); index++) {
        if (index % 2 === 0) {
            for (let index = 1; index <= ((sizeOfXadrez*2)); index++) {
                if (index % 2 === 0) {
                    addSpace()
                } else {
                    addHashTag()
                }   
            }
        } else {
            for (let index = 2; index <= ((sizeOfXadrez*2)+1); index++) {
                if (index % 2 === 0) {
                    addSpace()
                } else {
                    addHashTag()
                }      
            }
        }
        addLineBreak()
    }
    return chess
}

console.log(buildAChessboardWithTheSizeOfTheGivenParameter(20))