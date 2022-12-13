'use strict';

var radius = 700; //Часто используемое значение, от которого опираемся для создания объектов (размер часов)
var percent = 50; //Используем в отступах и позиции

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

//Add hour arrow
var hourArrow = document.createElement('div');
hourArrow.id = 'hourArrow';
hourArrow.style.backgroundColor = '#FF0000';
hourArrow.style.height = radius / 4 + 'px';
hourArrow.style.width = radius / 30 + 'px';
createArrows(hourArrow);

//Add minute arrow
var minuteArrow = document.createElement('div');
minuteArrow.id = 'minuteArrow';
minuteArrow.style.backgroundColor = 'black';
minuteArrow.style.height = radius / 2.5 + 'px';
minuteArrow.style.width = radius / 30 + 'px';
createArrows(minuteArrow);

//Add second arrow
var secondArrow = document.createElement('div');
secondArrow.id = 'secondArrow';
secondArrow.style.backgroundColor = '#009EFF';
secondArrow.style.height = radius / 2.25 + 'px';
secondArrow.style.width = radius / 80 + 'px';


/*secondArrow.style.transformOrigin = 'right center';*/

arrows.insertAdjacentElement('afterbegin', secondArrow);
createArrows(secondArrow);

function alignCenter(char) {
  char.style.position = 'absolute';
  char.style.top = percent + '%';
  char.style.left = percent + '%';
  char.style.transform = 'translate(-50%, -50%)';
}

function createArrows(char) {
  char.style.transformOrigin = '0 0';
  char.style.position = 'absolute';
  char.style.top = percent + '%';
  char.style.left = percent + '%';
  char.style.transform = 'translate(-50%, -100%)';
  char.style.rotate = '0deg';
  char.style.borderRadius = percent / 5 + 'px';
  arrows.insertAdjacentElement('afterbegin', char);
}

//Панелька анлоговых часов
var analogWatchBlock = document.createElement('div');
analogWatchBlock.id = 'analogWatchBlock';
analogWatchBlock.style.zIndex = '2';
analogWatchBlock.style.backgroundColor = '#FFEEA9';
analogWatchBlock.style.padding = `${radius/28}px ${radius/14}px`;
analogWatchBlock.style.position = 'absolute';
analogWatchBlock.style.top = percent * 1.2 + '%';
analogWatchBlock.style.left = percent + '%';
analogWatchBlock.style.transform = 'translate(-50%, -50%)';
analogWatchBlock.style.borderRadius = percent / 5 + 'px';
analogWatchBlock.style.fontSize = radius / 10 / 1.5 + 'px';
watchContainer.insertAdjacentElement('afterbegin', analogWatchBlock);

//Работаем с временем
setInterval(UpdateTime, 1000);

function UpdateTime() {
  var CurrTime = new Date();
  var CurrTimeStr = FormatDateTime(CurrTime);

  //Механические
  second(CurrTime);
/*  minute(CurrTime);
  hour(CurrTime);*/

  //Аналоговые часы
  document.getElementById('analogWatchBlock').innerHTML = CurrTimeStr;
}

function FormatDateTime(DT) {
  var Hours = DT.getHours();
  var Minutes = DT.getMinutes();
  var Seconds = DT.getSeconds();
  return Str0L(Hours, 2) + ':' + Str0L(Minutes, 2) + ':' + Str0L(Seconds, 2);
}

function Str0L(Val, Len) {
  var StrVal = Val.toString();
  while (StrVal.length < Len)
    StrVal = '0' + StrVal;
  return StrVal;
}

function second(DT){
  var Seconds = DT.getSeconds();
  var secondArrow = document.getElementById('secondArrow');
  secondArrow.style.rotate = Seconds*6 +'deg';
}

function minute(DT){
  var Minutes = DT.getSeconds();
  var MinutesArrow = document.getElementById('minuteArrow');
  MinutesArrow.style.rotate = Minutes*6 +'deg';
}

function hour(DT){
  var Hours = DT.getSeconds();
  var HoursArrow = document.getElementById('hourArrow');
  HoursArrow.style.rotate = Hours*6 +'deg';
}