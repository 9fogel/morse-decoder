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
    // write your solution here
}

function decode(expr) {
    let morseStr = '';
    
    for (let i = 0; i < expr.length; i + 9) {
      let letterCode = expr.slice(i, i + 10);
      i += 10;
  
      if (letterCode === '**********') {
        morseStr += ' ';
        } else {
          let letterMorse = '';
        
          for (let k = 0; k < letterCode.length; k + 1) {
            let symbolMorse = letterCode.slice(k, k + 2);
            k += 2;
  
            if (symbolMorse === '00') {
              letterMorse += '';
            } else if (symbolMorse === '10') {
                letterMorse += '.';
              } else if (symbolMorse === '11') {
                  letterMorse += '-';
                }
          } 
        

        for (let key in MORSE_TABLE) {
          if (key === letterMorse) {
            
            morseStr += MORSE_TABLE[key];
          }
        }
        
        } 
      
          
    }
    return morseStr;
  }

module.exports = {
    decode
}