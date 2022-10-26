var firstName;
var secondName;
var lastName;
/*var secondName = prompt('Введите Фамилию', '');
var lastName = prompt('Введите Отчество', '');
var age = parseInt(prompt('Сколько Вам лет', ''));
*/

ValidateFirstName();

secondName = prompt('Введите Фамилию', '');
lastName = prompt('Введите Отчество', '');

//Validation function list
function ValidateFirstName() {
  firstName = prompt('Введите Имя', '');

  if (!firstName) {
    alert('Все не так просто. \nПожалуйста, введите Имя.');
    return ValidateFirstName();
  }
  if (!/^[a-zA-Z]+$/.test(firstName)) {
    alert('Все не так просто. \nПожалуйста, введите Имя.');
    return ValidateFirstName();
  }
}





var sex = confirm('Ваш пол - мужской?');
var pension;

/*
  if (sex && (age >= 63)) {
    pension = true;
  } else if (!sex && (age >= 58)) {
    pension = true;
  }

  sex = (sex) ? 'мужской' : 'женский'
  pension = (pension) ? 'да' : 'нет';

  var fullName = firstName + ' ' + secondName + ' ' + lastName;
  var ageInDays = Math.floor(age * 365.2425);
  var futureYears = age + 5;

  var message = 'ваше ФИО: ' + fullName + '\n' +
    'ваш возраст в годах: ' + age + '\n' +
    'ваш возраст в днях: ' + ageInDays + '\n' +
    'через 5 лет вам будет: ' + futureYears + '\n' +
    'ваш пол: ' + sex + '\n' +
    'вы на пенсии: ' + pension;

  alert(message);*/
