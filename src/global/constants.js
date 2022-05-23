const VALID_BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
const VALID_WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
const NOTES = [
  'e3', 'f3', 'g#3', 'g3', 'g#4',
  
  'a4', 'a#4', 'b4','c4', 'c#4',
  'd4', 'd#4', 'e4', 'f4', 'f#4', 
  'g4', 'g#4',

  'a5', 'a#5', 'b5','c5', 'c#5',
  'd5', 'd#5', 'e5', 'f5', 'f#5', 
  'g5', 'g#5',

  'a6', 'a#6', 'b6','c6', 'c#6',
  'd6', 'd#6', 'e6'
  
];

const STRINGS = ['e', 'a', 'd', 'g', 'b', 'e'];

const FRETS = ['nut', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

const NOTE_TO_KEY = {
  c   : 'z',
  df  : 's',
  d   : 'x',
  ef  : 'd',
  e   : 'c',
  f   : 'v',
  gf  : 'g',
  g   : 'b',
  af  : 'h',
  a   : 'n',
  bf  : 'j',
  b   : 'm',
};
const KEY_TO_NOTE = {
  z: 'c',
  s: 'df',
  x: 'd',
  d: 'ef',
  c: 'e',
  v: 'f',
  g: 'gf',
  b: 'g',
  h: 'af',
  n: 'a',
  j: 'bf',
  m: 'b',
};
export {
  NOTES,
  VALID_KEYS,
  NOTE_TO_KEY,
  KEY_TO_NOTE,
  STRINGS,
  FRETS,
};