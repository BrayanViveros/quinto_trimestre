var gameContainer = document.getElementById("game-container");
    var score = 0;
    var time = 1500;
    var intervalId;

    gameContainer.addEventListener("click", function (event) {
      if (event.target.classList.contains("box")) {
        if (event.target.classList.contains("correct")) {
          score++;
          time -= 50;
          updateScore();
        }
      }
    });

    function createBox() {
      var box = document.createElement("div");
      box.classList.add("box");
      box.style.top = Math.random() * 450 + "px";
      box.style.left = Math.random() * 450 + "px";
      gameContainer.appendChild(box);

      setTimeout(function () {
        gameContainer.removeChild(box);
      }, time);
    }

    function updateScore() {
      var scoreElement = document.getElementById("score");
      scoreElement.textContent = "Puntuación: " + score;
    }

    function startGame() {
      intervalId = setInterval(createBox, time);
    }

    function stopGame() {
      clearInterval(intervalId);
      alert("Juego terminado. Puntuación final: " + score);
      score = 0;
      time = 1500;
      updateScore();
    }

    startGame();

    setTimeout(stopGame, 10000); // Juego de 10 segundos