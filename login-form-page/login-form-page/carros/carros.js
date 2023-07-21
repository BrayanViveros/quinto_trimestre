var car = document.getElementById("car");
    var road = document.getElementById("road");
    var roadWidth = road.offsetWidth;
    var carWidth = car.offsetWidth;
    var carPosition = 0;

    function moveLeft() {
      if (carPosition > 0) {
        carPosition -= 10;
        car.style.left = carPosition + "px";
      }
    }

    function moveRight() {
      if (carPosition < roadWidth - carWidth) {
        carPosition += 10;
        car.style.left = carPosition + "px";
      }
    }