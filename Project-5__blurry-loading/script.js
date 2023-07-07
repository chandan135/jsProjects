"use strict";

const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(bluring, 30);
function bluring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scaling(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scaling(load, 0, 100, 70, 0)}px)`;
}

const scaling = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
