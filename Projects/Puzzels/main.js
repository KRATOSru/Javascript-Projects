const riddle = {
  question: "Висит груша нельзя скушать",
  correctAnswer: "лампочка",
  hints: ["это сЪедобное", "это фрукт"],
  tries: 3,
  checkAnswer() {
    // TODO: написать логику проверки правильного ответа
  },
};

window.onload = function () {
  document.getElementById("riddle").innerText = riddle.question;
};

function check() {
  const input = document.getElementsByTagName("input"[0]);

  const guessedAnswer = input.value;

  if (guessedAnswer) {
    // TODO: вызвать фунцию checkAnswer у обЪекта загадки, передав туда ответ
  }
}
