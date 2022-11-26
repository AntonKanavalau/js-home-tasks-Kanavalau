var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr){
 var map = new Map();
 for (var char of arr){
   var sort = char.toLowerCase()?.split('')?.sort().join('');
   map.push(sort, char);
 }
 return Array.from(map.values());
}

console.log(anClean(arr));