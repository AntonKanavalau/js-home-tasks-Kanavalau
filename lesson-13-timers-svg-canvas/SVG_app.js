'use strict';

var radius = 700; //Часто используемое значение, от которого опираемся для создания объектов (размер часов)
var center = `${radius / 2}`;//Центр часов

document.body.style.margin = '0px';
var ns = 'http://www.w3.org/2000/svg';

//Add svg block
var svgBlock = document.createElementNS(ns, 'svg');
svgBlock.setAttribute('width', `${radius}`);
svgBlock.setAttribute('height', `${radius}`);
svgBlock.setAttribute('viewBox', '0 0 700 700');
svgBlock.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svgBlock.style.position = 'absolute'
svgBlock.style.top = '50%';
svgBlock.style.left = '50%';
svgBlock.style.transform = 'translate(-50%, -50%)';
document.body.insertAdjacentElement('afterbegin', svgBlock);

//Create background 1
var BG1 = document.createElementNS(ns, 'circle');
BG1.setAttribute('cx', center);
BG1.setAttribute('cy', center);
BG1.setAttribute('r', center);
BG1.setAttribute('fill', '#FFCCEE');
svgBlock.appendChild(BG1);

//Filter blur
var filter = document.createElementNS(ns, 'filter');
filter.id = 'blur';
svgBlock.insertAdjacentElement('afterbegin', filter);
var feGaussianBlur = document.createElementNS(ns, 'feGaussianBlur');
feGaussianBlur.setAttribute('in', 'SourceGraphic');
feGaussianBlur.setAttribute('stdDeviation', '5');
filter.appendChild(feGaussianBlur);

//Create background 2
var BG2 = document.createElementNS(ns, 'circle');
BG2.setAttribute('cx', center);
BG2.setAttribute('cy', center);
BG2.setAttribute('r', `${center / 2}`);
BG2.setAttribute('fill', 'rgb(223 254 255 / 22%)');
BG2.setAttribute('filter', 'url(#blur)');
svgBlock.appendChild(BG2);

//Create BG for numbers and numbers
var groupBG = document.createElementNS(ns, 'g');
groupBG.id = 'numberBG-group'
svgBlock.appendChild(groupBG);

var groupNumber = document.createElementNS(ns, 'g');
groupNumber.id = 'number-group'
svgBlock.appendChild(groupNumber);

for (var i = 0; i < 12; i++) {
  //create BG
  var numberBG = document.createElementNS(ns, 'circle');
  numberBG.setAttribute('cx', center);
  numberBG.setAttribute('cy', center / 5);
  numberBG.setAttribute('r', `${center / 7}`);
  numberBG.setAttribute('fill', 'rgb(78 78 78 / 40%)');

  var angle = 30 * (i + 1);//угол

  numberBG.setAttribute("transform", `rotate(${angle} ${center} ${center})`);
  groupBG.appendChild(numberBG);

  //create Numbers
  var number = document.createElementNS(ns, 'text');
  number.setAttribute('x', center);
  number.setAttribute('y', center / 4.25);
  number.setAttribute('fill', 'white');
  number.style.fontSize = radius / 15 + 'px';
  number.setAttribute('text-anchor', 'middle ');
  number.innerHTML = `${i + 1}`;

  number.setAttribute("transform", `rotate(${angle} ${center} ${center}) rotate(${-angle} ${center} ${center / 5.15})`);
  groupNumber.appendChild(number);
}

//Add Analog elements
var groupAnalog = document.createElementNS(ns, 'g');
groupAnalog.id = 'groupAnalog-group'
svgBlock.appendChild(groupAnalog);

//Панелька электронных часов
var analogWatchBlock = document.createElementNS(ns, 'rect');
analogWatchBlock.setAttribute('width', center / 1.5);
analogWatchBlock.setAttribute('height', center / 3.5);
analogWatchBlock.setAttribute('x', center - center / 3);
analogWatchBlock.setAttribute('y', center*1.15);
analogWatchBlock.setAttribute('rx', center / 25 + 'px');
analogWatchBlock.setAttribute('ry', center / 25 + 'px');
analogWatchBlock.setAttribute('fill', '#FFEEA9');
groupAnalog.appendChild(analogWatchBlock);

//Create numbers into analogWatchBlock
var analogWatchText = document.createElementNS(ns, 'text');
analogWatchText.setAttribute('x', center);
analogWatchText.setAttribute('y', center*1.325);
analogWatchText.setAttribute('fill', 'black');
analogWatchText.style.fontSize = radius / 15 + 'px';
analogWatchText.setAttribute('text-anchor', 'middle ');
groupAnalog.appendChild(analogWatchText);

//Add arows elements
var groupArrows = document.createElementNS(ns, 'g');
groupArrows.id = 'arrowsElem-group'
svgBlock.appendChild(groupArrows);

//Center arrows
var xP = center;
var yP = center - center / 30;

//Add minute arrow
var minuteArrow = document.createElementNS(ns, 'rect');
minuteArrow.id = 'minuteArrow';
minuteArrow.setAttribute('width', center / 1.35);
minuteArrow.setAttribute('height', center / 15);
minuteArrow.setAttribute('x', center);
minuteArrow.setAttribute('y', center - center / 30);
minuteArrow.setAttribute('rx', center / 25 + 'px');
minuteArrow.setAttribute('ry', center / 25 + 'px');
minuteArrow.setAttribute('fill', 'black');
groupArrows.appendChild(minuteArrow);

//Add hour arrow
var hourArrow = document.createElementNS(ns, 'rect');
hourArrow.id = 'hourArrow';
hourArrow.setAttribute('width', center / 2);
hourArrow.setAttribute('height', center / 15);
hourArrow.setAttribute('x', center);
hourArrow.setAttribute('y', center - center / 30);
hourArrow.setAttribute('rx', center / 25 + 'px');
hourArrow.setAttribute('ry', center / 25 + 'px');
hourArrow.setAttribute('fill', 'red');
groupArrows.appendChild(hourArrow);

//Add second arrow
var secondArrow = document.createElementNS(ns, 'rect');
secondArrow.id = 'secondArrow';
secondArrow.setAttribute('width', center / 1.15);
secondArrow.setAttribute('height', center / 30);
secondArrow.setAttribute('x', center);
secondArrow.setAttribute('y', center - center / 60);
secondArrow.setAttribute('rx', center / 25 + 'px');
secondArrow.setAttribute('ry', center / 25 + 'px');
secondArrow.setAttribute('fill', '#009EFF');
groupArrows.appendChild(secondArrow);

//Add arrow dot
var arrowDot = document.createElementNS(ns, 'circle');
arrowDot.setAttribute('cx', center);
arrowDot.setAttribute('cy', center);
arrowDot.setAttribute('r', `${center / 15}`);
arrowDot.setAttribute('fill', 'black');
groupArrows.appendChild(arrowDot);


//Работаем с временем
setInterval(UpdateTime, 1000);

function UpdateTime() {
  var CurrTime = new Date();
  var CurrTimeStr = FormatDateTime(CurrTime);

  //Механические
  analogTime(CurrTime);

  //Аналоговые часы
  analogWatchText.innerHTML = `${CurrTimeStr}`;
}

function FormatDateTime(DT) {
  var Hours = DT.getHours();
  var Minutes = DT.getMinutes();
  var Seconds = DT.getSeconds();
  return Str0L(Hours, 2) + ':' + Str0L(Minutes, 2) + ':' + Str0L(Seconds, 2);
}

function Str0L(Val, Len) {
  var StrVal = Val.toString();
  while (StrVal.length < Len) StrVal = '0' + StrVal;
  return StrVal;
}

function analogTime(DT) {
  var Seconds = DT.getSeconds();
  var Minutes = DT.getMinutes();
  var Hours = DT.getHours();

  var secondArrowAngle = Seconds * 6;
  secondArrow.setAttribute('transform', `rotate(${secondArrowAngle - 90} ${center} ${center})`);
  var minutesArrowAngle = ((Minutes * 60) + Seconds) / 60 * 6;
  minuteArrow.setAttribute('transform', `rotate(${minutesArrowAngle - 90} ${center} ${center})`);
  var hoursArrowAngle = ((Hours * 3600) + (Minutes * 60) + Seconds) / 360 * 3;
  hourArrow.setAttribute('transform', `rotate(${hoursArrowAngle - 90} ${center} ${center})`);
}