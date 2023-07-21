
let sal_Ini = 5000;
let sal_Act = sal_Ini;


function apostar() {
  let num_Apo = parseInt(prompt("Ingresa el número al que quieres apostar (1-10):"));
  let can_Apo = parseInt(prompt("Ingresa la cantidad de pesos que quieres apostar:"));

  if (can_Apo > sal_Act) {
    alert("No puedes apostar más de tu saldo actual.");
    return;
  }

  let num_Gen = Math.floor(Math.random() * 10) + 1;
  alert("Salio el numero: " + num_Gen);

 
  if (num_Apo == num_Gen) {
    let ganancia = can_Apo * 3;
    sal_Act += ganancia;
    alert("Ganaste " + ganancia + " pesos.");
  } else {
    sal_Act -= can_Apo;
    alert("Perdiste " + can_Apo + " pesos.");
  }

 
  alert("Tu saldo actual es: " + sal_Act + " pesos.");

 
  if (sal_Act <= 0) {
    alert("¡Has perdido todo tu saldo! El juego ha terminado.");
  } else if (sal_Act) {
    alert;
  } else {
    apostar(); 
  }
}


apostar();