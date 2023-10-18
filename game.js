const car = document.getElementById("car");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");

let carPosition = 605;
const carStep = 90;

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveCarLeft();
    } else if (event.key === "ArrowRight") {
        moveCarRight();
    }
});

function moveCarLeft() {
  carPosition -= carStep;
  updateCarPosition();
}

function moveCarRight() {
  carPosition += carStep;
  updateCarPosition();
}

function updateCarPosition() {
  car.style.left = carPosition + "px";
}