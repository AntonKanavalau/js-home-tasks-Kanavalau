"use strict"

var string = prompt('Введите строку');
var vowels = ['а', 'о', 'у', 'э', 'ы', 'я', 'ё', 'е', 'ю', 'и'];
var count = 0;

amountVowels();

function amountVowels() {
  for (var char of string.toLowerCase()) {
    if (vowels.includes(char)) {
      count += 1;
    }
  }
  return count;
}

console.log(string);
console.log(count);
