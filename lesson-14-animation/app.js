'use strict';

window.addEventListener('load', draw);

function draw() {
  var contentBlock = document.getElementById('pin-pongBlock');

  //background
  BG();
  function BG() {
    var BG = document.createElement('div');
    BG.id = 'BG';
    BG.style.width = 600 + 'px';
    BG.style.height = 400 + 'px';
    BG.style.position = 'relative';
    BG.style.backgroundColor = '#ff00003b';
    contentBlock.insertAdjacentElement('afterbegin', BG);
  }

  //Characters
  var p1 = new Character('#9698F5', 1);
  var p2 = new Character('#26D4AC', 1);

  var characters = [p1, p2];
  drawCharacter(characters);

  function drawCharacter() {
    var BG = document.getElementById('BG');
    for (var i = 0; i < characters.length; i++) {
      var person = document.createElement('div');
      person.id = `${i + 1}`;
      person.style.width = characters[i].width + 'px';
      person.style.height = characters[i].height + 'px';
      person.style.position = characters[i].position;
      person.style.backgroundColor = characters[i].color;

      BG.insertAdjacentElement('afterbegin', person);
    }
  }

  //constructor
  function Character(color, zIndex) {
    this.width = 10;
    this.height = 100;
    this.position = 'absolute';
    this.color = color;
    this.zIndex = zIndex;
  }
}




