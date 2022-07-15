const size = 8
let xadrez = ''
let counter = 1
for (let index = 1; index <= (size); index++) {
    if (index % 2 === 0) {
        for (let index = 1; index <= ((size*2)); index++) {
            if (index % 2 === 0) {
                xadrez = xadrez + ' '
            } else {
                xadrez = xadrez + '#'
            }   
        }
    } else { 
        xadrez = xadrez + '\n'
        for (let index = 2; index <= ((size*2)+1); index++) {
            if (index % 2 === 0) {
                xadrez = xadrez + ' '
            } else {
                xadrez = xadrez + '#'
            }      
        }
    }
 xadrez = xadrez + '\n'
}




console.log(xadrez)