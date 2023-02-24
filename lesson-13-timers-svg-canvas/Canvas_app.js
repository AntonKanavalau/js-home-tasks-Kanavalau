'use strict';

var radius = 700; //Размер canvas поля
var center = radius / 2;//Центр canvas поля

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

context.translate(center, center);

setInterval(drawClock, 1000);
function drawClock() {
  drawFace();
  drawNumbers();
  drawTime()
}

function drawFace() {
//watch background 1
  context.beginPath();
  context.arc(0, 0, `${center}`, 0, Math.PI * 2, false);
  context.fillStyle = '#FFCCEE';
  context.fill();
  context.closePath();

//watch background 2
  context.save();
  context.beginPath();
  context.arc(0, 0, `${center / 2}`, 0, Math.PI * 2, false);
  context.filter = 'blur(15px)';
  context.fillStyle = 'rgb(223 254 255 / 22%)';
  context.fill();
  context.closePath();
  context.restore();

  //center Dot
  context.save();
  context.beginPath();
  context.arc(0, 0, `${center / 15}`, 0, Math.PI * 2, false);
  context.fillStyle = 'black';
  context.fill();
  context.closePath();
  context.restore();

  context.fillStyle='#FFEEA9';
  context.fillRect(center-(center/1.5)*2,center-(center/1.25),center/1.5, center/4);
}

//create numbers
function drawNumbers() {
  context.textBaseline = 'middle';
  context.textAlign = 'center';
  context.font = `bold ${center / 7.4}px Arial`;

  for (var i = 0; i < 12; i++) {
    var angle = (30 * (i + 1)) * Math.PI / 180;
    context.rotate(angle);
    context.translate(0, -center * 0.8);
    context.rotate(-angle);

    context.fillStyle = 'rgb(78 78 78 / 40%)';
    context.beginPath();
    context.arc(0, 0, `${center / 7}`, 0, Math.PI * 2, false);
    context.fill();

    context.fillStyle = 'white';
    context.fillText(`${i + 1}`, 0, 0);

    context.rotate(angle);
    context.translate(0, center * 0.8);
    context.rotate(-angle);
  }
}

//Работаем с временем
function drawTime() {
  let CurrTime = new Date();
  let hour = CurrTime.getHours();
  let minute = CurrTime.getMinutes();
  let second = CurrTime.getSeconds();

  context.fillStyle = 'red';
  context.fillText(Str0L(hour, 2) + ':' + Str0L(minute, 2) + ':' + Str0L(second, 2), 0, center-(center/1.5));

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

  function Str0L(Val, Len) {
    var StrVal = Val.toString();
    while (StrVal.length < Len)
      StrVal = '0' + StrVal;
    return StrVal;
  }
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
