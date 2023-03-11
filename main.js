document.title = "Akashi Hen";
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");
const body = document.body;
const defaultText = "Klik saya 1";
btn1.textContent = defaultText;

btn1.style.border = "none";
btn1.style.padding = "8px";
btn1.style.fontSize = "24px";
btn1.style.background = "tomato";

function gantiWarna() {
  btn1.style.background = "aqua";
}

function ubahText() {
  btn1.textContent = "hihi haha";
}

function oriText() {
  btn1.textContent = defaultText;
}

function myButton() {
  const nama = document.createElement("p");
  nama.textContent = "Fiqri Sanusi";
  body.append(nama);
}

function gantiColor() {
  const warna = document.querySelector("p");
  warna.style.color = "red";
}
