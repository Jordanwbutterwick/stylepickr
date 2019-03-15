var colorPalette = document.getElementById("color");
var colorChoice = document.getElementById("colorChange").setAttribute("value", colorChoiceVal);
var colorChoiceVal = colorChoice.value;
var currentColor = "./styles/color" + colorChoiceVal + ".css";
console.log(colorChoiceVal);
if ((colorChoiceVal = "undefined")) {
  colorChoiceVal = 1;
} else {
  colorChoiceVal = colorChoice.value;
}

function changeColor() {
  colorPalette.setAttribute("href", currentColor);
}
colorChoice.preventDefault;
colorChoice.addEventListener("submit", changeColor());
