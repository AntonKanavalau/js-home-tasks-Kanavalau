'use strict';

var divContainer = document.getElementById('container');
var arrIMG = divContainer.getElementsByTagName('img');

var DragImage = null; // какая картинка сейчас перетаскивается
var DragShiftX = 0;
var DragShiftY = 0;


addDivStyle(divContainer);
addIMGStyle(arrIMG);

//Добавили стили для div
function addDivStyle(block) {
  block.style.height = '800px'
  block.style.width = '1000px'
  block.style.borderRadius = '10px';
  block.style.border = 'solid 1px black';
  block.style.position = 'relative';
  block.addEventListener('mousemove', checkMouse, false)
  /*  block.setAttribute('ondrop', 'DivDrop(event,this)');
    block.setAttribute('ondragover', 'DivDragOver(event)');*/
}

//Добавили стили для картинок
function addIMGStyle(char) {
  for (var i = 0; i < char.length; i++) {
    char[i].setAttribute('alt', `img${[i + 1]}`);
    char[i].style.width = '150px';
    char[i].style.position = 'absolute';
    char[i].style.left = `${char[i].width * i}px`;
    char[i].addEventListener('mousedown', Drag_Start, false)
  }
}

//Координаты мыши в блоке
var mouseX;
var mouseY;

function checkMouse(event) {
  mouseX = event.pageX - divContainer.offsetTop;
  mouseY = event.pageY - divContainer.offsetLeft;
}

function Drag_Start(EO) {
  EO = EO || window.event;
  //Записали в глоб.переменную кликнутый элемент
  DragImage = EO.target;

  //Записали в глоб.переменные координаты кликнутого элемента
  DragShiftX = mouseX - DragImage.offsetLeft;
  DragShiftY = mouseY - DragImage.offsetTop;
  console.log('Drag_Start');
  console.log(mouseX);
  console.log(mouseY);
  console.log('----------------------');
  console.log(DragShiftX);
  console.log(DragShiftY);
  console.log('----------------------');
  /*DragImage.removeEventListener('mousedown', Drag_Start, false);*/
  /*DragImage.addEventListener('mousemove', Drag_Move, false);*/
  DragImage.addEventListener('mouseup', Drag_Stop, false);
}

/*function Drag_Move(DragImage) {
  DragShiftX = mouseX- DragImage.offsetLeft;
  DragShiftY = mouseX - DragImage.offsetTop;


 /!*DragImage.removeEventListener('mousemove', Drag_Move, false);*!/
  DragImage.addEventListener('mouseup', Drag_Stop, false);

  console.log(DragShiftX);
  console.log(DragShiftY);
}*/


function Drag_Stop(EO) {
  DragShiftX = mouseX - DragImage.offsetLeft;
  DragShiftY = mouseY - DragImage.offsetTop;

  console.log('Drag_Stop');
  console.log(mouseX);
  console.log(mouseY);
  console.log('----------------------');
  console.log(DragShiftX);
  console.log(DragShiftY);
  console.log('----------------------');

/*  console.log(mouseX);
  console.log(mouseY);
  console.log('----------------------');
  console.log(DragShiftX);
  console.log(DragShiftY);*/

  DragImage.removeEventListener('mouseup', Drag_Stop, false);
/*  DragImage.removeEventListener('mousemove', Drag_Move, false);*/
  DragImage.removeEventListener('mousedown', Drag_Start, false);

  DragImage.addEventListener('mousedown', Drag_Start, false);


}


