var currentStyle = document.colorchange;
var form = document.getElementById("colorChange");
var i = form.value;

let colorOptions = [
  "/styles/color1.css",
  "/styles/color2.css",
  "/styles/color3.css",
  "/styles/color4.css",
  "/styles/color5.css"
];

form.addEventListener("submit", function changeColor() {
  var newColor = colorOptions[i];
  console.log(newColor);
  event.preventDefault();
  currentStyle.setAttribute("href", newColor);
});
