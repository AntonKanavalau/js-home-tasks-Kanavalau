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
  block.style.borderRadius = '10px';
  block.style.border = 'solid 1px black';
    block.style.position = 'relative';
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
    /*    char[i].setAttribute('ondragstart', 'CoonDragStart(event)');
        char[i].setAttribute('ondragstart', 'CoonDragEnd(event)');*/
  }
}

function Drag_Start(EO) {
  EO = EO || window.event;
  //Записали в глоб.переменную кликнутый элемент
  DragImage = EO.target;
  //Координаты mousedown относительно всего монитора
  var clickX = EO.screenX;
  var clickY = EO.screenY;

  //Координаты IMG относительно DIV
  var targetImgX = DragImage.offsetLeft;
  var targetImgY = DragImage.offsetTop;

  //Записали в глоб.переменные координаты кликнутого элемента
  DragShiftX = clickX - targetImgX;
  DragShiftY = clickY - targetImgY;

  console.log(EO);
  console.log(DragImage);
  console.log(clickX);
  console.log(clickY);
  console.log('----------------------');
  console.log(targetImgX);
  console.log(targetImgY);
  console.log('----------------------');
  console.log(DragShiftX);
  console.log(DragShiftY);
}

function Drag_Move(){

}


function Drag_Stop(){

}

