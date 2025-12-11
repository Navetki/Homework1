function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //
}

function generateMath() {
  const num1 = getRandomIntInclusive(1, 10);
  const num2 = getRandomIntInclusive(1, 10);
  const operators = ["+", "-", "*", "/"];
  const randomOperator = operators[getRandomIntInclusive(0, 3)];

  let question;
  let answer;

  switch (randomOperator) {
    case "+":
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case "-":
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case "*":
      question = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;
    case "/":
      question = `${num1} / ${num2}`;
      answer = num1 / num2;
      break;
  }

  return { question, answer };
}

function startGame2() {
  const problem = generateMath();
  const userAnswerString = prompt(`Реши пример: ${problem.question}`);

  const userAnswer = Number(userAnswerString);

  const isCorrect = Math.abs(userAnswer - problem.answer) < 0.001;

  if (isCorrect) {
    alert("Верно! Молодец!");
  } else {
    alert(`Ошибка! Правильный ответ: ${problem.answer}`);
  }
}
