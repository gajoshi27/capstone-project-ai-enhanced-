let dark = document.querySelector("#dark-mode");
let background = document.querySelector("body");
let p = document.querySelectorAll("p");
let div = document.querySelectorAll("div");
let h1 = document.querySelectorAll("h1");
let isDarkMode = false;
let a = document.querySelectorAll("a");


  dark.onclick = function () {
    if (isDarkMode) {
    
      background.style.backgroundColor = "white";
      div.forEach((d) => (d.style.backgroundColor = "white"));
      p.forEach((p) => (p.style.color = "black"));
      h1.forEach((h) => (h.style.color = "black"));
      a.forEach((a) => (a.style.color = "black"));
    } else {
    
      background.style.backgroundColor = "black";
      div.forEach((d) => (d.style.backgroundColor = "black"));
      p.forEach((p) => (p.style.color = "white"));
      h1.forEach((h) => (h.style.color = "white"));
      a.forEach((a) => (a.style.color = "white"));
    }
    isDarkMode = !isDarkMode; 
  }