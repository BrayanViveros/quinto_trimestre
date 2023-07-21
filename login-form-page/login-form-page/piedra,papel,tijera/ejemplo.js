function play(userChoice) {
    let choices = ["piedra", "papel", "tijera"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (userChoice === computerChoice) {
      result = "Empate, ambos eligieron " + userChoice + ".";
    } else if (
      (userChoice === "piedra" && computerChoice === "tijera") ||
      (userChoice === "papel" && computerChoice === "piedra") ||
      (userChoice === "tijera" && computerChoice === "papel")
    ) {
      result = "¡Ganaste!, Tu elegiste " + userChoice + " y la computadora eligió " + computerChoice + ".";
    } else {
      result = "Perdiste, Tú elegiste " + userChoice + " y la computadora eligió " + computerChoice + ".";
    }

    document.getElementById("result").textContent = result;
  }
  console.log (result)