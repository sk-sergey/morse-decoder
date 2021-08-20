const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    function decodeMorseSymbol (morseSymbol) {
            
        if (morseSymbol == 10) {return "."}
        else {return '-'} 
    }

    function decodeMorseLetter(encodedLetter){

        let morseWord = ''

        if (encodedLetter == '**********') return ' ';
        for (let i = encodedLetter.indexOf(1); i < encodedLetter.length; i +=2 ) {

            morseSymbol = encodedLetter.slice(i, i + 2)
            morseWord = morseWord + decodeMorseSymbol(morseSymbol)

        }
        
        return MORSE_TABLE[morseWord]

    }

    let decodeString = ''
    for (let i = 0; i < expr.length; i += 10){      
        
        encodedLetter = expr.substr(i,10)
        decodeString = decodeString + decodeMorseLetter(encodedLetter)

     }

     return decodeString
}

module.exports = {
    decode
}
