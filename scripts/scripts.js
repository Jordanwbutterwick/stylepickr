var currentStyle = document.colorchange;
var form = document.getElementById('colorChange');

let colorOptions = [
  "/styles/color1.css",
  "/styles/color2.css",
  "/styles/color3.css",
  "/styles/color4.css",
  "/styles/color5.css"
];

form.addEventListener('submit', function changeColor() {
  var newColor = colorOptions[form.value];
  console.log(newColor);
  currentStyle.preventDefault();
  currentStyle.setAttribute('href', newColor);
});

if (currentStyle.value != 1) {
  console.log(currentStyle.color1.value)
} else {
  console.log('you suck')
}