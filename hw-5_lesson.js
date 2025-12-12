// задание 1
function findMin(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

const num1 = 8;
const num2 = 4;
const result1 = findMin(num1, num2);
console.log(`Меньшее: ${result1}`);

const num3 = 6;
const num4 = 6;
const result2 = findMin(num3, num4);
console.log(`Меньшее: ${result2}`);

// задание 2
function checkParity(number) {
  if (number % 2 === 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
}

// задание 3

function displaySquare(num) {
  const square = num * num;
  console.log(`Квадрат числа ${num} равен: ${square}`);
  return square;
}

// задание 4

function checkAge() {
  const age = prompt("Сколько Вам лет?");

  if (isNaN(age)) {
    alert("Вы ввели некорректные данные.");
    return;
  }
  if (age < 0) {
    alert("Вы ввели неправильное значение");
  } else if (age >= 13) {
    alert("Добро пожаловать!");
  } else {
    alert("Привет, друг!");
  }
}
checkAge();

// задание 5

function multiplyIfNumbers(m, n) {
  if (isNaN(m) || isNaN(n)) {
    return "Одно или оба значения не являются числом";
  }

  return m * n;
}

// задание 6

function checkCube() {
  let userNumber = prompt("Укажите любое число");

  if (isNaN(userNumber)) {
    return "Переданный параметр не является числом";
  }

  const cubeNumber = userNumber ** 3;

  return `${userNumber}  в кубе равняется ${cubeNumber}`;
}

alert(checkCube());

// задание 7

const circle1 = {
  radius: 8, //

  getArea() {
    return Math.PI * this.radius ** 2;
  },

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};

const circle2 = {
  radius: 15,

  getArea() {
    return Math.PI * this.radius ** 2;
  },

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
};
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
