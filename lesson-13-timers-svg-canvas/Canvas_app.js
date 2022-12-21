'use strict';

var radius = 700; //Размер canvas поля
var center = `${radius / 2}`;//Центр canvas поля

document.body.style.margin = '0px';

//Add Canvas block
var canvasBlock = document.createElement( 'canvas');
canvasBlock.id = 'Canvas';
canvasBlock.width = canvasBlock.height = radius;
canvasBlock.style.position = 'absolute'
canvasBlock.style.top = '50%';
canvasBlock.style.left = '50%';
canvasBlock.style.transform = 'translate(-50%, -50%)';
document.body.insertAdjacentElement('afterbegin', canvasBlock);

var Canvas = document.getElementById('Canvas');
var context = Canvas.getContext('2d');

//watch background 1
context.beginPath();
context.arc(`${center}`,`${center}`, `${center}`, 0,Math.PI*2, false);
context.fillStyle = '#FFCCEE';
context.fill();
context.closePath();

//watch background 2
context.beginPath();
context.arc(`${center}`,`${center}`, `${center/2}`, 0,Math.PI*2, false);
context.filter = 'blur(15px)';
context.fillStyle = 'rgb(223 254 255 / 22%)';
context.fill();
context.closePath();


