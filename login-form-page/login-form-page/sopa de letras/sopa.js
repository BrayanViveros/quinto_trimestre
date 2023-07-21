var words = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "SOPA",
    "LETRAS",
    "JUEGO"
  ];

  var puzzle = document.getElementById("puzzle");
  var result = document.getElementById("result");
  var foundWords = [];

  // Generar la sopa de letras
  generatePuzzle();

  function checkWord(word) {
    var letters = document.getElementsByClassName("letter");
    var wordFound = true;

    for (var i = 0; i < letters.length; i++) {
      if (letters[i].textContent !== word[i]) {
        wordFound = false;
        break;
      }
    }

    if (wordFound) {
      document.getElementById("result").textContent = "¡Palabra encontrada!";
    } else {
      document.getElementById("result").textContent = "Palabra no encontrada.";
    }
  }
