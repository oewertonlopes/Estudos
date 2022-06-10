function menuToggle() {
  let teste = document.querySelector("#menu-area").style.width == "200px";
  if (teste == true) {
    document.querySelector("#menu-area").style.width = "0px";
  } else {
    document.querySelector("#menu-area").style.width = "200px";
  }
}

/*
function menuToggle() {
  if (document.querySelector("#menu-area").style.width == "200px") {
    document.querySelector("#menu-area").style.width = "0px";
  } else {
    document.querySelector("#menu-area").style.width = "200px";
  }
}
*/

/*
//forma mais correta de fazer com classlist
function menuToggle() {
  let menuArea = document.querySelector("#menu-area");
  if (menuArea.classList.contains("menu-opened") == true) {
    menuArea.classList.remove("menu-opened");
  } else {
    menuArea.classList.add("menu-opened");
  }
}
*/
