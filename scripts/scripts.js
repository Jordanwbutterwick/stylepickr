function changeColor(colorPalette) {
  function getColorVal(colorChoiceVal) {
    var colorChoice = document.getElementById("colorChange").setAttribute("value", colorChoiceVal);
    var colorChoiceVal = colorChoice.value;
  }
  colorPalette.document.getElementById("color").setAttribute("href", currentColor);
  var currentColor = "./styles/color" + colorChoiceVal + ".css";
  console.log(colorChoiceVal);
  if ((colorChoiceVal = "undefined")) {
    colorChoiceVal = 1;
  } else {
    colorChoiceVal = colorChoice.value;
  }
}
colorChoice.preventDefault;
colorChoice.addEventListener("submit", changeColor());
