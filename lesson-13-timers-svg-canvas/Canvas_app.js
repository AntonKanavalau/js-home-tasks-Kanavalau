'use strict';

var radius = 700; //Размер canvas поля
var center = `${radius / 2}`;//Центр canvas поля

document.body.style.margin = '0px';

//Add Canvas block
var canvasBlock = document.createElement('canvas');
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
context.arc(`${center}`, `${center}`, `${center}`, 0, Math.PI * 2, false);
context.fillStyle = '#FFCCEE';
context.fill();
context.closePath();

//watch background 2
context.save();
context.beginPath();
context.arc(`${center}`, `${center}`, `${center / 2}`, 0, Math.PI * 2, false);
context.filter = 'blur(15px)';
context.fillStyle = 'rgb(223 254 255 / 22%)';
context.fill();
context.closePath();
context.restore();

drawBGNumbers();
drawNumbers();

//create BG numbers
function drawBGNumbers() {
  for (var i = 0; i < 12; i++) {
    context.translate(`${center}`, `${center}`);
    context.rotate(30 * Math.PI / 180);
    context.translate(`${-center}`, `${-center}`);
    context.fillStyle = 'rgb(78 78 78 / 40%)';
    context.beginPath();
    context.arc(`${center}`, `${center / 5}`, `${center / 7}`, 0, Math.PI * 2, false);
    context.fill();
  }
}

function drawNumbers() {
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.font = `bold ${center / 7.4}px Arial`;
  context.fillStyle = 'white';

  for (var i = 0; i < 12; i++) {
    var angle = (30 * (i + 1)) * Math.PI / 180;
    context.rotate(angle);
    context.translate(0, -center * 0.8);
    context.rotate(-angle);
    context.fillText(`${i + 1}`, `${center}`, `${center}`);
    context.rotate(angle);
    context.translate(0, center * 0.8);
    context.rotate(-angle);
  }
}

//center Dot
context.save();
context.beginPath();
context.arc(`${center}`, `${center}`, `${center / 15}`, 0, Math.PI * 2, false);
context.fillStyle = 'black';
context.fill();
context.closePath();
context.restore();

//Работаем с временем
setInterval(drawTime, 1000);

context.translate(center, center);

function drawTime() {
  let CurrTime = new Date();
  let hour = CurrTime.getHours();
  let minute = CurrTime.getMinutes();
  let second = CurrTime.getSeconds();

// часовая стрелка
  hour = hour % 12;
  hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
  drawHand(context, hour, center * 0.5, center * 0.07);
// минутная
  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand(context, minute, center * 0.8, center * 0.07);
// секундная
  second = (second * Math.PI / 30);
  drawHand(context, second, center * 0.9, center * 0.02);
}

function drawHand(context, angle, length, width) {
  context.beginPath();
  context.lineWidth = width;
  context.lineCap = "round";
  context.moveTo(0, 0);
  context.rotate(angle);
  context.lineTo(0, -length);
  context.stroke();
  context.rotate(-angle);
}
