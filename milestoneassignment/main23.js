const colors = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#FFFF00', '#00FFFF', '#800080'];

function changeBackgroundColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}

document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor);
