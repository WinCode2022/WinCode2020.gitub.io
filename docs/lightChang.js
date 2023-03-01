"use strict"

tgBtn.onclick = lightMod;

function lightMod() {
  tgBtn.style.transform = "rotate(720deg)";
  tgBtn.className = "fa-solid fa-moon";
  tgBtn.style.color = "black";
  scrin.style.background = "white";
  formI.style.background = "white";
  vrap.style.background = "rgb(86 103 171)";
  tgBtn.onclick = darkMod;

}

function darkMod() {
  tgBtn.style.transform = "rotate(-720deg)";
  tgBtn.className = "fa-solid fa-moon";
  tgBtn.className = "fa-solid fa-sun";
  tgBtn.style.color = "white";
  scrin.style.background = "black";
  formI.style.background = "black";
  vrap.style.background = "rgb(87, 87, 87)";
  tgBtn.onclick = lightMod;
}