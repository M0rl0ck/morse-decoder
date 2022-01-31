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
    let result = '';
    
    for (let i = 0; i < expr.length; i = i + 10) {
        let str1 = expr.substr(i, 10);
        let str2 = '';
        if (str1 === '**********') {result += ' '}
            else {    
                for (let h = 0; h < str1.length; h = h + 2) {
                    let str3 = str1.substr(h, 2);
                    if (str3 === '11') {
                       str2 += '-';
                    } else if (str3 === '10') {
                        str2 += '.';
                    }
                    
                }
            result += MORSE_TABLE[str2];
        }
    }
    return result;
}

module.exports = {
    decode
}