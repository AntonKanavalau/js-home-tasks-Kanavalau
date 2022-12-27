'use strict';

window.addEventListener('load', draw);

function draw() {
  /*document.body.style.margin = '0px';*/
  var contentBlock = document.getElementById('pin-pongBlock');
  //background
  drawBG(contentBlock);

  //moves
  /*setInterval(game, 40);*/
  //characters
  drawCharacter(characters);
  //ball
  drawBall();
}

//draw background
function drawBG(contentBlock) {
  var BG = document.createElement('div');
  BG.id = 'BG';
  BG.style.width = 600 + 'px';
  BG.style.height = 400 + 'px';
  BG.style.position = 'relative';
  BG.style.backgroundColor = '#ff00003b';
  contentBlock.insertAdjacentElement('afterbegin', BG);
}

//Characters
var p1 = new Character('#9698F5', 'translate(0, -50%)', 0); //left
var p2 = new Character('#8b5409', 'translate(-100%, -50%)', 100);//right

var characters = [p1, p2];


function drawCharacter() {
  var BG = document.getElementById('BG');
  for (var i = 0; i < characters.length; i++) {
    var person = document.createElement('div');
    person.id = `p${i + 1}`;
    person.style.width = characters[i].width + 'px';
    person.style.height = characters[i].height + 'px';
    person.style.position = characters[i].position;
    person.style.transform = characters[i].transform;
    person.style.top = characters[i].top;
    person.style.left = characters[i].left + '%';
    person.style.backgroundColor = characters[i].color;
    BG.insertAdjacentElement('afterbegin', person);
  }
}

//characters constructor
function Character(color, translate, left) {
  this.width = 10;
  this.height = 100;
  this.transform = translate;
  this.position = 'absolute';
  this.color = color;
  this.top = '50%';
  this.left = left;
}

//ball


function drawBall() {
  var ball = document.createElement('div');
  var BG = document.getElementById('BG');
  ball.id = 'ball';
  ball.style.width = ball.style.height = '20px';
  ball.style.backgroundColor = 'black';
  ball.style.borderRadius = '50%';
  ball.style.top = ((BG.offsetHeight - ball.offsetHeight) / 2) + 'px';
  ball.style.left = ((BG.offsetWidth - ball.offsetWidth) / 2) + 'px';
/*
  ball.style.top = BG.offsetHeight/ 2 + 'px';
*/
  /*  ball.style.top = 0 + 'px';
    ball.style.left = 0 + 'px';*/
  ball.style.position = 'absolute';
  BG.insertAdjacentElement('afterbegin', ball);
  console.log((BG.offsetHeight - ball.offsetHeight) / 2);
  console.log(BG.offsetHeight);
  console.log(ball.getBoundingClientRect());
}

/*var ball = {
  PosX: 0,
  PosY: 0,
  SpeedX: 15,
  SpeedY: 15,
  width: 20,
  height: 20,

  Update: function () {
    var ballObj = document.getElementById('ball');
    var BG = document.getElementById('BG');
/!*    this.PosX = (BG.offsetWidth / 2) - (this.width / 2);
    this.PosY = (BG.offsetHeight / 2) - (this.height / 2);*!/
    ballObj.style.position = 'absolute';
    ballObj.style.left = this.PosX + "px";
    ballObj.style.top = this.PosY + "px";
    console.log(this.width);
  }
};*/

var AreaH = {
  width: 600,
  height: 400
}

/*var ball = document.createElement('div');
function drawBall() {
  var BG = document.getElementById('BG');
  ball.id = 'dall';
  ball.style.width = ball.style.height = '20px';
  ball.style.backgroundColor = 'black';
  ball.style.borderRadius = '50%';
  ball.style.position = 'absolute';
  ball.style.top = '50%';
  ball.style.left = '50%';
  ball.style.transform = 'translate(-50%, -50%)';
  BG.insertAdjacentElement('afterbegin', ball);

}

console.log(ball.getBoundingClientRect());*/

function startGame() {
  setInterval(game, 40);
}

function game() {
  ball.PosX += ball.SpeedX;
// вылетел ли мяч правее стены?
  if (ball.PosX + ball.width > AreaH.width) {
    ball.SpeedX = -ball.SpeedX;
    ball.PosX = AreaH.width - ball.width;
  }
  if (ball.PosX < 0) // вылетел ли мяч левее стены
  {
    ball.SpeedX = -ball.SpeedX;
    ball.PosX = 0;
  }
  ball.PosY += ball.SpeedY;
  // вылетел ли мяч ниже пола?
  if (ball.PosY + ball.height > AreaH.height) {
    ball.SpeedY = -ball.SpeedY;
    ball.PosY = AreaH.height - ball.height;
  }
  // вылетел ли мяч выше потолка?
  if (ball.PosY < 0) {
    ball.SpeedY = -ball.SpeedY;
    ball.PosY = 0;
  }

  ball.Update();
}

ball.Update();
