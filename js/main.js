let ham = document.getElementById("hamburger");
let menu_status = document.getElementById("menu-status");

ham.addEventListener("click", () => {
  let stat = menu_status.className;
  if (stat == "hide-menu") {
    ham.src = "./images/icon-close.svg";
    menu_status.className = "show-menu";
  } else if (stat == "show-menu") {
    ham.src = "./images/icon-hamburger.svg";
    menu_status.className = "hide-menu";
  }
});
