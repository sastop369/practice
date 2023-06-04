var tempResult = 1.01;

function doMath(a, b, c) {
  switch (a) {
    case "+":
      return b + c;
    case "-":
      return b - c;
    case "*":
      return b * c;
    case "/":
      return b / c;
  }
}

function submitAnswer(result) {
  document.querySelector("#mathForm").addEventListener("submit", function(e) {
    e.preventDefault();
    var userAnswer = document.querySelector("#answerInput").value;
    var bool = (result == userAnswer) ? true : false;

    if (bool === true) {
      // Зеленый цвет при правильном ответе
      document.body.style.backgroundColor = "#34a853";
      setTimeout(function() {
        document.body.style.backgroundColor = "#EAE7DC";
      }, 1000);
      document.querySelector("#answerInput").value = "";
      // Вывод нового вопроса
      randomCreator();
    } else {
      // Красный цвет при неправильном ответе
      document.body.style.backgroundColor = "#dc3545";
      setTimeout(function() {
        document.body.style.backgroundColor = "#EAE7DC";
      }, 1000);
    }
  });
}

function randomCreator() {
  // После использовании подсказки удаляем ответ
  if (document.querySelector(".correctAnswer")) {
    document.querySelector(".correctAnswer").remove();
  }

  // Рандомайзер
  var operators = ["+", "-", "*", "/"];
  var randomIntOne = parseInt((Math.random() * 100), 10);
  var randomIntTwo = parseInt((Math.random() * 100), 10);
  var randomOperator = operators[Math.floor(Math.random() * operators.length)];

  // Создание вопроса
  var el = document.querySelector(".questionText");
  el.innerHTML = ("").concat(randomIntOne, " ", randomOperator, " ", randomIntTwo);

  // Считаем и округляем значения с плавающей точкой до двух десятичных знаков
  var preliminaryResult = doMath(randomOperator, randomIntOne, randomIntTwo);
  var isFloat = (!Number.isInteger(preliminaryResult)) ? true : false;
  var result = (isFloat === true) ? preliminaryResult.toFixed(2) : preliminaryResult;
  tempResult = result;

  // Прослушиватель событий для формы в зависимости от типа браузера
  var userAnswerInput = document.querySelector("#answerInput");
  if (userAnswerInput.addEventListener) {
    userAnswerInput.addEventListener("submit", submitAnswer(result), false);
  } else if (userAnswerInput.attachEvent) {
    userAnswerInput.attachEvent("onsubmit", submitAnswer(result));
  }

  return result;
}

function answerHelp() {
  if (!document.querySelector(".correctAnswer")) {
    // Показать ответ
    document.querySelector(".mathQuestion").innerHTML += ("<p class='text-center correctAnswer m-0 mb-3'>Правильный ответ: " + tempResult + "</p>");
  }
}