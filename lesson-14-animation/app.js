'use strict';

//игровое поле
var pinPongBlock = document.getElementById('pin-pongBlock');
pinPongBlock.style.width = 600 + 'px';
pinPongBlock.style.height = 400 + 'px';
pinPongBlock.style.backgroundColor = '#ff00003b';

// работаем с таймером
requestAnimationFrame(tick);

//работа со временем
var settimeout;

//Табло счета
var score = document.createElement('div');
var score1 = 0; //score first player
var score2 = 0;//score second player;
scoreInnerHTML();
score = document.body.insertBefore(score, document.body.children[1]);

//обновляем табло с очками
function scoreInnerHTML() {
  score.innerHTML = score1 + ":" + score2;
}

//Работа с ракетками
var player1 = document.createElement('div'); //left player
player1.style.width = '10px';
player1.style.height = '100px';
player1.style.position = 'absolute';
player1.style.backgroundColor = '#9698F5';
pinPongBlock.appendChild(player1);

var player2 = document.createElement('div'); //second player
player2.style.width = '10px';
player2.style.height = '100px';
player2.style.position = 'absolute';
player2.style.backgroundColor = '#8b5409';
pinPongBlock.appendChild(player2);

var playerH = {
  //player 1
  player1PosX: pinPongBlock.getBoundingClientRect().left,
  player1PosY: pinPongBlock.getBoundingClientRect().top + pinPongBlock.getBoundingClientRect().height / 2 - player1.getBoundingClientRect().height / 2,
  player1Speed: 0,

  //player 2
  player2PosX: pinPongBlock.getBoundingClientRect().left + pinPongBlock.getBoundingClientRect().width - player2.getBoundingClientRect().width,
  player2PosY: pinPongBlock.getBoundingClientRect().top + pinPongBlock.getBoundingClientRect().height / 2 - player1.getBoundingClientRect().height / 2,
  player2Speed: 0,
  width: 10,
  height: 100,

  Update: function () {
    var player1Obj = player1;
    var player2Obj = player2;

    player1Obj.style.left = this.player1PosX + "px";
    player1Obj.style.top = this.player1PosY + "px";

    player2Obj.style.left = this.player2PosX + "px";
    player2Obj.style.top = this.player2PosY + "px";
  }
};
playerH.Update();

var playerAreaH = {
  width: 10,
  height: pinPongBlock.getBoundingClientRect().height
};

//Работа с мячем
var ball = document.createElement('div');
ball.style.width = '20px';
ball.style.height = '20px';
ball.style.borderRadius = '10px';
ball.style.backgroundColor = 'black';
ball.style.position = 'absolute';
pinPongBlock.appendChild(ball);

var ballH = {
  PosX: pinPongBlock.getBoundingClientRect().left + pinPongBlock.getBoundingClientRect().width / 2 - ball.getBoundingClientRect().width / 2,
  PosY: pinPongBlock.getBoundingClientRect().top + pinPongBlock.getBoundingClientRect().height / 2 - ball.getBoundingClientRect().height / 2,
  SpeedX: 0,
  SpeedY: 0,
  width: 20,
  height: 20,

  Update: function () {
    var ballObj = ball;
    ballObj.style.left = this.PosX + 'px';
    ballObj.style.top = this.PosY + 'px';
  }
};
ballH.Update();

var areaH = {
  width: pinPongBlock.getBoundingClientRect().width,
  height: pinPongBlock.getBoundingClientRect().height
};

window.addEventListener('keydown', function (EO) {
  EO = EO || window.event;
  EO.preventDefault();

  //push CRL
  if (EO.keyCode === 17) {
    playerH.player1Speed = 5;
  }
  //push SHIFT
  if (EO.keyCode === 16) {
    playerH.player1Speed = -5;
  }
  //push CRL
  if (EO.keyCode === 40) {
    playerH.player2Speed = 5;
  }
  //push SHIFT
  if (EO.keyCode === 38) {
    playerH.player2Speed = -5;
  }
});

window.addEventListener('keyup', function (EO) {
  EO = EO || window.event;
  EO.preventDefault();

  //push CRL
  if (EO.keyCode === 17) {
    playerH.player1Speed = 0;
  }
  //push SHIFT
  if (EO.keyCode === 16) {
    playerH.player1Speed = 0;
  }
  //push CRL
  if (EO.keyCode === 40) {
    playerH.player2Speed = 0;
  }
  //push SHIFT
  if (EO.keyCode === 38) {
    playerH.player2Speed = 0;
  }
});

//апускаем игру
function startGame() {
  ballH.SpeedX = 3;
  ballH.SpeedY = 3;
}

// работаем с таймером
requestAnimationFrame(tick);

function tick() {
  playerH.Update();

  //player 1
  playerH.player1PosY += playerH.player1Speed;

  //ниже пола?
  if (playerH.player1PosY + playerH.height > (pinPongBlock.getBoundingClientRect().top + playerAreaH.height)) {
    playerH.player1PosY = pinPongBlock.getBoundingClientRect().top + playerAreaH.height - playerH.height;
  }

  //выше потодка?
  if (playerH.player1PosY < pinPongBlock.getBoundingClientRect().top) {
    playerH.player1PosY = pinPongBlock.getBoundingClientRect().top;
  }

  //player 2
  playerH.player2PosY += playerH.player2Speed;

  //ниже пола?
  if (playerH.player2PosY + playerH.height > (pinPongBlock.getBoundingClientRect().top + playerAreaH.height)) {
    playerH.player2PosY = pinPongBlock.getBoundingClientRect().top + playerAreaH.height - playerH.height;
  }
  //выше пола?
  if (playerH.player2PosY < pinPongBlock.getBoundingClientRect().top) {
    playerH.player2PosY = pinPongBlock.getBoundingClientRect().top;
  }


  //ball
  ballH.PosX -= ballH.SpeedX;

  // вылетел ли мяч правее стены?
  if ((ballH.PosY + ballH.height < playerH.player2PosY || ballH.PosY > (playerH.player2PosY + playerH.height))
    && ballH.PosX + ballH.width >= (pinPongBlock.getBoundingClientRect().left + pinPongBlock.getBoundingClientRect().width)) {

    score1 += 1;
    scoreInnerHTML();
    ballH.SpeedX = 0;
    ballH.SpeedY = 0;

    ballH.PosX = pinPongBlock.getBoundingClientRect().left + pinPongBlock.getBoundingClientRect().width - ballH.width - 1;

    settimeout = window.setTimeout(function () {
      ballH.PosX = pinPongBlock.getBoundingClientRect().left + playerH.width;
      ballH.PosY = playerH.player1PosY + playerH.height / 2;
      startGame();
    }, 2000);

  } else if (!(ballH.PosY + ballH.height < playerH.player2PosY || ballH.PosY > (playerH.player2PosY + playerH.height))
    && ballH.PosX + ballH.width > (playerH.player2PosX)) {
    ballH.SpeedX = -ballH.SpeedX;
    ballH.PosX = pinPongBlock.getBoundingClientRect().left + pinPongBlock.getBoundingClientRect().width - playerH.width - ballH.width;
  }

  // вылетел ли мяч левее стены
  if ((ballH.PosY + ballH.height < playerH.player1PosY || ballH.PosY > (playerH.player1PosY + playerH.height))
    && ballH.PosX <= (pinPongBlock.getBoundingClientRect().left)) {

    score2 += 1;
    scoreInnerHTML();
    ballH.SpeedX = 0;
    ballH.SpeedY = 0;

    ballH.PosX = pinPongBlock.getBoundingClientRect().left + 1;
    settimeout = window.setTimeout(function () {
      ballH.PosX = pinPongBlock.getBoundingClientRect().left + pinPongBlock.getBoundingClientRect().width - playerH.width;
      ballH.PosY = playerH.player2PosY + playerH.height / 2;
      startGame();
    }, 2000);

  } else if (!(ballH.PosY + ballH.height < playerH.player1PosY || ballH.PosY > (playerH.player1PosY + playerH.height))
    && ballH.PosX < (playerH.width + playerH.player1PosX)) {
    ballH.SpeedX =- ballH.SpeedX;
    ballH.PosX = pinPongBlock.getBoundingClientRect().left + playerH.width;
  }

  ballH.PosY -= ballH.SpeedY;
  // вылетел ли мяч ниже пола?
  if (ballH.PosY + ballH.height > (pinPongBlock.getBoundingClientRect().top + areaH.height)) {
    ballH.SpeedY =- ballH.SpeedY;
    ballH.PosY = pinPongBlock.getBoundingClientRect().top + areaH.height - ballH.height;
  }

  // вылетел ли мяч выше потолка?
  if (ballH.PosY < pinPongBlock.getBoundingClientRect().top) {
    ballH.SpeedY =- ballH.SpeedY;
    ballH.PosY = pinPongBlock.getBoundingClientRect().top;
  }

  ballH.Update();
  requestAnimationFrame(tick);
}



