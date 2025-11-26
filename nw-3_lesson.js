let password = "пароль";
let UserPass = prompt("Введите пароль");
if (UserPass == password) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
}

let c = "Number";
if (c > 0 && c < 10) {
  alert(Верно);
} else {
  alert("Неверно");
}

let d = "15";
let e = "120";
if (d > 100 || e > 100) {
  alert("Верно");
} else {
  alert("Неверно");
}

let a = "2";
let b = "3";
let result = Number("2") + Number("3");
console.log(result);

let monthNumber = string(prompt("Номер Месяца"));
switch (monthNumber) {
  case "1":
    console.log("Зима");
    break;
  case "2":
    console.log("Зима");
    break;
  case "3":
    console.log("Весна");
    break;
  case "4":
    console.log("Весна");
    break;
  case "5":
    console.log("Весна");
    break;
  case "6":
    console.log("Лето");
    break;
  case "7":
    console.log("Лето");
    break;
  case "8":
    console.log("Лето");
    break;
  case "9":
    console.log("Осень");
    break;
  case "10":
    console.log("Осень");
    break;
  case "11":
    console.log("Осень");
    break;
  case "12":
    console.log("Зима");
    break;
    defauilt: console.log(">=13");
}

let number = prompt("Пожалуйста, введите любое число");

number = parseInt(number);

if (isNaN(number)) {
  console.log("Вы ввели не число!");
} else {
  if (number % 2 == 0) {
    console.log("Четное число");
  } else {
    console.log("Нечетное число");
  }
}

let clientOS = number(prompt("Введите тип OS"));
if ("clientOS === 0") {
  console.log("Установите версию приложения для iOS по ссылке");
} else {
  console.log("Установите версию приложения для Android по ссылке");
}

let clientOS2 = Number(prompt("Введите тип OS"));
let clientDeviceYear = Number(prompt("Введите год выпуска телефона"));

if (clientOS2 === 0 && clientDeviceYear < 2015) {
  console.log("Установите облегченную версию приложения для iOS по ссылке");
} else if (clientOS2 === 1 && clientDeviceYear < 2015) {
  console.log("Установите облегченную версию приложения для Android по ссылке");
} else {
  console.log("Установите приложение");
}
