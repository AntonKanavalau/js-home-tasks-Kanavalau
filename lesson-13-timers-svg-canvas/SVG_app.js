'use strict';

var radius = 700; //Часто используемое значение, от которого опираемся для создания объектов (размер часов)
var percent = 50; //Используем в отступах и позиции

var center = `${radius / 2}`;

document.body.style.margin = '0px';
var ns = 'http://www.w3.org/2000/svg';

//Add svg block
var svgBlock = document.createElementNS(ns, 'svg');
svgBlock.setAttribute('width', `${radius}`);
svgBlock.setAttribute('height', `${radius}`);
svgBlock.setAttribute('viewBox', '0 0 700 700');
svgBlock.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
document.body.insertAdjacentElement('afterbegin', svgBlock);

//Create background 1
var BG1 = document.createElementNS(ns, 'circle');
BG1.setAttribute('cx', center);
BG1.setAttribute('cy', center);
BG1.setAttribute('r', center);
BG1.setAttribute('fill', '#FFCCEE');
svgBlock.appendChild(BG1);

//Filter
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

//Create numbers
/*for (var i = 0; i < 12; i++) {
  var numberBG = document.createElementNS(ns, 'circle');
  numberBG.setAttribute('cx', center);
  numberBG.setAttribute('cy', center);
  numberBG.setAttribute('r', `${center / 5}`);

  var radiusOut = radius / 2.5;
  var angle = (30 * (i + 1)) / 180 * Math.PI;

  var numberDivCenterX = watchCenterX + radiusOut * Math.sin(angle);
  var numberDivCenterY = watchCenterY - radiusOut * Math.cos(angle);

  numberBG.style.left = Math.round(numberDivCenterX - numberDiv.offsetWidth / 2) + 'px';
  numberBG.style.top = Math.round(numberDivCenterY - numberDiv.offsetHeight / 2) + 'px';
}*/
var group = document.createElementNS(ns, 'g');
svgBlock.appendChild(group);

var numberBG = document.createElementNS(ns, 'circle');
numberBG.setAttribute('cx', center);
numberBG.setAttribute('cy', center / 5);
numberBG.setAttribute('r', `${center / 7}`);
numberBG.setAttribute('fill', 'rgb(78 78 78 / 40%)');
group.appendChild(numberBG);


/*
for (var i = 0; i < 12; i++) {
  var numberBG = document.createElementNS(ns, 'circle');
  numberBG.setAttribute('cx', center);
  numberBG.setAttribute('cy', center / 5);
  numberBG.setAttribute('r', `${center / 7}`);
  numberBG.setAttribute('fill', 'rgb(78 78 78 / 40%)');

  var radiusOut = radius / 10;
  var angle = (30 * (i + 1)) / 180 * Math.PI;

  var watchCenterX = center;
  var watchCenterY = center;

  var numberDivCenterX = watchCenterX + radiusOut * Math.sin(angle);
  var numberDivCenterY = watchCenterY - radiusOut * Math.cos(angle);

  var positionX = Math.round(numberDivCenterX - numberDiv.offsetWidth / 2);
  var positionY = Math.round(numberDivCenterY - numberDiv.offsetHeight / 2);

  numberBG.setAttribute('cx', positionX);
  numberBG.setAttribute('cy', positionY);

  group.appendChild(numberBG);
}
*/


