var firstName;
var secondName;
var lastName;
var age;

ValidateFirstName();
ValidateSecondName();
ValidateLastName();
ValidateAge();

var sex = confirm('Ваш пол - мужской?');
var pension;

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

alert(message);

//Validation First Name
function ValidateFirstName() {
  firstName = prompt('Введите Имя', '');

  if (!firstName) {
    alert('Все не так просто.\nМожно использовать только буквы. \nПожалуйста, введите Имя.');
    return ValidateFirstName();
  }
  if (!/^[a-zA-Zа-яА-Я]+$/.test(firstName)) {
    alert('Все не так просто.\nМожно использовать только буквы. \nПожалуйста, введите Имя.');
    return ValidateFirstName();
  }
}

//Validation Second Name
function ValidateSecondName() {
  secondName = prompt('Введите Фамилию', '');

  if (!secondName) {
    alert('Все не так просто.\nМожно использовать только буквы. \nПожалуйста, введите Фамилию.');
    return ValidateSecondName();
  }
  if (!/^[a-zA-Zа-яА-Я]+$/.test(secondName)) {
    alert('Все не так просто.\nМожно использовать только буквы. \nПожалуйста, введите Фамилию.');
    return ValidateSecondName();
  }
}

//Validation Last Name
function ValidateLastName() {
  lastName = prompt('Введите Отчество', '');

  if (!lastName) {
    alert('Все не так просто.\nМожно использовать только буквы. \nПожалуйста, введите Отчество.');
    return ValidateLastName();
  }
  if (!/^[a-zA-Zа-яА-Я]+$/.test(lastName)) {
    alert('Все не так просто.\nМожно использовать только буквы. \nПожалуйста, введите Отчество.');
    return ValidateLastName();
  }
}

//Validation Age
function ValidateAge() {
  age = parseInt(prompt('Сколько лет', ''));

  if (!age) {
    alert('Все не так просто.\nМожно использовать только цифры. \nПожалуйста, введите возраст.');
    return ValidateAge();
  }
}