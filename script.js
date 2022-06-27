function createDivs() {
  const selectSection = document.querySelector('#pixel-board');
  for (let i = 0; i < 25; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    selectSection.appendChild(div);
  }
}

createDivs();

function firstSelection() {
  const initialColor = document.querySelector('#c1');
  initialColor.classList.add('selected');
}

firstSelection();

function changeColorClass(event) {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

const c1 = document.querySelector('#c1');
c1.addEventListener('click', changeColorClass);
const c2 = document.querySelector('#c2');
c2.addEventListener('click', changeColorClass);
const c3 = document.querySelector('#c3');
c3.addEventListener('click', changeColorClass);
const c4 = document.querySelector('#c4');
c4.addEventListener('click', changeColorClass);

function applyingColor(event) {
  const c = document.querySelector('.selected');
  const p = window.getComputedStyle(c).getPropertyValue('background-color');
  event.target.style.backgroundColor = p;
};

let whitePixel = document.querySelectorAll('.pixel');
for (let i = 0; i < whitePixel.length; i += 1) {
  whitePixel[i].addEventListener('click', applyingColor);
};
