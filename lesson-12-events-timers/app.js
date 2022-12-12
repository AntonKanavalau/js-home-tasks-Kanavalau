'use strict';


var radius = 700;
var percent = 50;

document.body.style.margin = '0px'
//Header block
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

//watch background 2
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

//create numbers
createNumbers();

function createNumbers() {
  //Create block with numbers
  var clockFace = document.createElement('div');
  clockFace.id = 'clockFace';
  clockFace.style.zIndex = '1';
  alignCenter(clockFace);

  watchContainer.insertAdjacentElement('afterbegin', clockFace);

  var watchCenterX = watchContainer.offsetLeft;
  var watchCenterY = watchContainer.offsetTop;


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
    var angle = (30 * (i + 1)) / 180 * Math.PI;

    var numberDivCenterX = watchCenterX + radiusOut * Math.sin(angle);
    var numberDivCenterY = watchCenterY - radiusOut * Math.cos(angle);

    numberDiv.style.left = Math.round(numberDivCenterX - numberDiv.offsetWidth / 2) + 'px';
    numberDiv.style.top = Math.round(numberDivCenterY - numberDiv.offsetHeight / 2) + 'px';

    clockFace.insertAdjacentElement('afterbegin', numberDiv);
  }
}

//Add block Arrows
var arrows = document.createElement('div');
arrows.id = 'arrows';
arrows.style.zIndex = '2';
alignCenter(arrows);
watchContainer.insertAdjacentElement('afterbegin', arrows);

//Add arrow dot
var arrowDot = document.createElement('div');
arrowDot.style.zIndex = '3';
arrowDot.id = 'arrowDot';
arrowDot.style.width = radius / 15 + 'px';
arrowDot.style.height = radius / 15 + 'px';
arrowDot.style.backgroundColor = 'rgb(0 0 0)';
arrowDot.style.borderRadius = percent + '%';
alignCenter(arrowDot);

arrows.insertAdjacentElement('afterbegin', arrowDot);

//Add minute arrow
var minuteArrow = document.createElement('div');
minuteArrow.style.backgroundColor = 'black';
minuteArrow.style.width = radius / 2.5 + 'px';
minuteArrow.style.height = radius / 30 + 'px';
minuteArrow.style.transformOrigin = 'left';
minuteArrow.style.position = 'absolute';
minuteArrow.style.top = percent + '%';
minuteArrow.style.left = percent + '%';
minuteArrow.style.transform = 'translate(0, -50%)';
minuteArrow.style.borderRadius = percent/5 + 'px';
arrows.insertAdjacentElement('afterbegin', minuteArrow);

//Add second arrow
var secondArrow = document.createElement('div');
secondArrow.style.backgroundColor = '#009EFF';
secondArrow.style.width = radius / 2.25 + 'px';
secondArrow.style.height = radius / 80 + 'px';
secondArrow.style.transformOrigin = 'left';
secondArrow.style.position = 'absolute';
secondArrow.style.top = percent + '%';
secondArrow.style.left = percent + '%';
secondArrow.style.rotate = '45deg';
secondArrow.style.transform = 'translate(0, -50%)';
secondArrow.style.borderRadius = percent/5 + 'px';
arrows.insertAdjacentElement('afterbegin', secondArrow);

//Add hour arrow
var hourArrow = document.createElement('div');
hourArrow.style.backgroundColor = '#FF0000';
hourArrow.style.width = radius / 4 + 'px';
hourArrow.style.height = radius / 30 + 'px';
hourArrow.style.transformOrigin = 'left';
hourArrow.style.position = 'absolute';
hourArrow.style.top = percent + '%';
hourArrow.style.left = percent + '%';
hourArrow.style.rotate = '30deg';
hourArrow.style.transform = 'translate(0, -50%)';
hourArrow.style.borderRadius = percent/5 + 'px';
arrows.insertAdjacentElement('afterbegin', hourArrow);
