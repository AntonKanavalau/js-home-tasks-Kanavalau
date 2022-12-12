'use strict';


var radius = 700;
var percent = 50;

document.body.style.margin = '0px'

var watchContainer = document.getElementById('watch');
watchContainer.style.width = percent * 2 + 'vw';
watchContainer.style.height = percent * 2 + 'vh';
watchContainer.style.position = 'relative';

//watch background 1
var divBG1 = document.createElement('div');
divBG1.id = 'divBG1';
divBG1.style.width = radius + 'px';
divBG1.style.height = radius + 'px';
divBG1.style.backgroundColor = '#FFCCEE';
divBG1.style.borderRadius = percent + '%';
alignCenter(divBG1);
watchContainer.insertAdjacentElement('afterbegin', divBG1);


var divBG2 = document.createElement('div');
divBG2.id = 'divBG2';
divBG2.style.width = radius / 2 + 'px';
divBG2.style.height = radius / 2 + 'px';
divBG2.style.backgroundColor = 'rgb(223 254 255 / 22%)';
divBG2.style.filter = 'blur(15px)';
divBG2.style.borderRadius = percent + '%';
alignCenter(divBG2);
divBG1.insertAdjacentElement('afterbegin', divBG2);

function alignCenter(char) {
  char.style.position = 'absolute';
  char.style.top = percent + '%';
  char.style.left = percent + '%';
  char.style.transform = 'translate(-50%, -50%)';
}

createNumbers();

function createNumbers() {
  var clockFace = document.createElement('div');
  clockFace.id = 'clockFace';
  clockFace.style.zIndex = '1';
  clockFace.style.position = 'absolute';

  watchContainer.insertAdjacentElement('afterbegin', clockFace);

  var watchBG = document.getElementById('divBG1');
  var watchCenterX = watchBG.offsetLeft;
  var watchCenterY = watchBG.offsetTop;


  for (var i = 0; i < 12; i++) {
    var charDistance = radius / 10;

    var numberDiv = document.createElement('div');
    numberDiv.innerText = `${i + 1}`;
    numberDiv.style.width = charDistance + 'px';
    numberDiv.style.height = charDistance + 'px';
    numberDiv.style.lineHeight = charDistance + 'px';
    numberDiv.style.fontSize = charDistance / 1.5 + 'px';
    numberDiv.style.borderRadius = percent + '%';
    numberDiv.style.textAlign = 'center';
    numberDiv.style.backgroundColor = 'rgb(78 78 78 / 40%)';
    numberDiv.style.color = 'white';
    numberDiv.style.padding = radius / 100 + 'px';
    numberDiv.style.position = 'absolute';
    numberDiv.style.left = '0px';
    numberDiv.style.top = '0px';
    numberDiv.style.transform = 'translate(-50%, -50%)';


    var radiusOut = radius / 2.5;
    var angle = (30 * (i+1)) / 180 * Math.PI;

    var numberDivCenterX = watchCenterX + radiusOut * Math.sin(angle);
    var numberDivCenterY = watchCenterY - radiusOut * Math.cos(angle);


    numberDiv.style.left = Math.round(numberDivCenterX - numberDiv.offsetWidth / 2) + 'px';
    numberDiv.style.top = Math.round(numberDivCenterY - numberDiv.offsetHeight / 2) + 'px';

    clockFace.insertAdjacentElement('afterbegin', numberDiv);
  }
}

var arrows = document.createElement('div');
arrows.id = 'arrows';
watchContainer.insertAdjacentElement('afterbegin', arrows);
