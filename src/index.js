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

const TO_DURATIONS = {
  10: '.',
  11: '-'
};

function decode(expr) {
  let ret = '';
  for (let i = 0; i < expr.length - 9; i += 10)
  {
    if (expr[i] === '*')
    {
      ret += ' ';
      continue;
    }

    let curr = expr.slice(i, i + 10).replace(/^0+/, '');
    let code = '';
    for (let j = 0; j < curr.length; j += 2)
    {
      code += TO_DURATIONS[curr[j] + curr[j+1]];
    }
    ret += MORSE_TABLE[code];
  }
  return ret;
}

module.exports = {
    decode
}