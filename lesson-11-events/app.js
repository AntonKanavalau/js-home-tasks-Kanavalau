'use strict';

var divContainer = document.getElementById('container');
var arrIMG = divContainer.getElementsByTagName('img');

addDivStyle(divContainer);
addALT(arrIMG);

function addDivStyle(block){
  block.style.height = '800px'
  block.style.borderRadius = '10px';
  block.style.border= 'solid 1px black';
}

function addALT(char) {
  for (var i = 0; i < char.length; i++) {
    char[i].setAttribute('alt', `img${[i+1]}`);
    char[i].style.width = '10%';
    console.log(char[i]);
  }
}

