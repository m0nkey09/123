let text = document.getElementById("paragraph");
let textfont = document.getElementById("button1");
let textweight = document.getElementById("button2");
let textcolor = document.getElementById("button3");
let colorlist = ["#b82121", "#71b821", "#e3962b", "#412ad4"];
let inputtext = document.getElementById("input");
let changetext = document.getElementById("changetext");
let lastvalue;
textfont.addEventListener("click", () => {
  if (text.classList.contains("font")) {
    text.classList.remove("font");
  } else {
    text.classList.add("font");
  }
});

textweight.addEventListener("click", () => {
  if (text.classList.contains("weight")) {
    text.classList.remove("weight");
  } else {
    text.classList.add("weight");
  }
});

textcolor.addEventListener("click", () => {
  let randomnumber = Math.round(Math.random() * colorlist.length);
  console.log(randomnumber);
  while (lastvalue == randomnumber) {
    randomnumber = Math.round(Math.random() * colorlist.length);
  }
  text.style.color = colorlist[randomnumber];
  lastvalue = randomnumber;
});
changetext.addEventListener("click", () => {
  let value = inputtext.value;
  console.log(value);
  text.innerHTML = value;
});
