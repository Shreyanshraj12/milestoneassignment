const paragraph = document.getElementById('paragraph');
const words = paragraph.innerText.split(' ');

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 8) {
    const span = document.createElement('span');
    span.textContent = words[i];
    span.classList.add('highlight');
    paragraph.replaceChild(span, document.createTextNode(words[i]));
  }
}
