const image = document.getElementById('image');
let imageX = 0;
let imageY = 0;

document.addEventListener('keydown', function(event) {
  const step = 10; // Adjust the step size as needed

  if (event.code === 'ArrowUp') {
    imageY -= step;
  } else if (event.code === 'ArrowDown') {
    imageY += step;
  } else if (event.code === 'ArrowLeft') {
    imageX -= step;
  } else if (event.code === 'ArrowRight') {
    imageX += step;
  }

  image.style.top = imageY + 'px';
  image.style.left = imageX + 'px';
});
