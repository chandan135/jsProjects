"use strict";

const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    panels.forEach((panel) => panel.classList.remove("active"));
    panel.classList.add("active");
  });
});
