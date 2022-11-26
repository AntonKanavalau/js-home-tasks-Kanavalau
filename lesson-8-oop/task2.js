function isPal(string) {
  var elem = string.toLowerCase()?.replace(/\s/g, '');
  var join = elem.split('')?.reverse()?.join('');
  return elem === join;
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false