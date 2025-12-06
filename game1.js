function startGame1() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  while (true) {
    let guessNumber = prompt("Угадай число от 1 до 100");
    guessNumber = Number(guessNumber);
    if (guessNumber === randomNumber) {
      alert("УРА! Поздравляю, ты угадал число!");
      break;
    } else if (guessNumber > randomNumber) {
      alert("Загаданное число меньше, попробуй еще");
    } else {
      alert("Загаданное число больше, попробуй еще");
    }
  }
}
