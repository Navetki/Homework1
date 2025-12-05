let counter = 0;

while (counter < 2) {
  console.log("Привет");
  counter++;
}

let i = 1;
while (i < 6) {
  console.log(i);
  i++;
}

let i_2 = 7;
while (i_2 < 23) {
  console.log(i_2);
  i_2++;
}

const obj = {
  obj_1: {
    name: "Коля",
    salary: 200,
  },
  obj_2: {
    name: "Вася",
    salary: 300,
  },
  obj_3: {
    name: "Петя",
    salary: 400,
  },
};
for (let key in obj) {
  console.log(`${key}: ${obj[key].name}, зарплата: ${obj[key].salary} $`);
}

let n = 1000;
let num = 0;

while (n >= 50) {
  n /= 2;
  num++;
}
console.log(`окончательное число n: ${n}`);
console.log(`Количество итераций: ${num}`);

const firstFriday = 1;
const daysInMonth = 31;

for (let day = firstFriday; day <= daysInMonth; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

let k = 100;
let iterations = 0;

while (k >= 0) {
  k -= 7;
  iterations++;
}
console.log(`окончательное число k: ${k}`);
console.log(`Количество итераций: ${iterations}`);
