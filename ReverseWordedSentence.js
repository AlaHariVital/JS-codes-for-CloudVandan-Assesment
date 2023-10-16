const readLine = require('readline-sync');
var input = readLine.question(
  'Enter a sentence you want to reverse each word in it.'
);
const words = input.split(' ');
const reversedWords = words.map((word) => {
  return word.split('').reverse().join('');
});

const wordReversedSentence = reversedWords.join(' ');

console.log(wordReversedSentence);
