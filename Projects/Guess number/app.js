// const secretNum = Math.ceil(Math.random() * 10);
const secretNum = 5;
let tries = 0;

function guessNum(num) {
  if (tries >= 3) {
    return alert("Игра окончена"); //без return дальще код будет выполняться
  }

  if (num === secretNum) {
    alert("Вы угадали");
    tries = 3; // игра окончена
  } else {
    alert("Вы не угадали");
    tries++;
  }
}
