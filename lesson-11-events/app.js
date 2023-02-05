'use strict';

var divContainer = document.getElementById('container');
var arrIMG = divContainer.getElementsByTagName('img');

addDivStyle(divContainer);
addIMGStyle(arrIMG);

var DragImage = null; // какая картинка сейчас перетаскивается
var DragShiftX;
var DragShiftY;

//Добавили стили для div
function addDivStyle(block) {
  block.style.position = 'relative';
}

//Добавили стили для картинок
function addIMGStyle(char) {
  for (var i = 0; i < char.length; i++) {
    char[i].setAttribute('alt', `img${[i + 1]}`);
    char[i].style.width = '150px';
    char[i].style.position = 'absolute';
    char[i].style.left = `${char[i].width * i}px`;
    char[i].style.top = '0px';
    //Кидаем слушателя на нажатие по картинке и вызываем функцию Drag_Start
    char[i].addEventListener('mousedown', Drag_Start, false);
  }
}

function Drag_Start(EO) {
  EO = EO || window.event;
  EO.preventDefault();

  //Записали в глоб.переменную кликнутый элемент
  DragImage = EO.target;

  //Записали в глоб.переменные координаты кликнутого элемента
  DragShiftX = EO.pageX - DragImage.offsetLeft;
  DragShiftY = EO.pageY - DragImage.offsetTop;

  //Последняя нажатая картинка будет поверх остальных
  divContainer.appendChild(DragImage);

  //Кидаем слушателя на ведение мыши в окне браузера
  window.addEventListener('mousemove', Drag_Move, false);
}


function Drag_Move(EO) {
  EO = EO || window.event;
  EO.preventDefault();

  DragImage.style.left = (EO.pageX - DragShiftX) + 'px';
  DragImage.style.top = (EO.pageY - DragShiftY) + 'px';

  //Кидаем слушателя на ведение мыши в окне браузера
  window.addEventListener('mouseup', Drag_Stop, false);
}

//Все обнулили
function Drag_Stop(EO) {
  EO.preventDefault();

  window.removeEventListener('mousemove', Drag_Move, false);
  window.removeEventListener('mouseup', Drag_Stop, false);

  DragImage = null;
  DragShiftX = 0;
  DragShiftY = 0;
}

