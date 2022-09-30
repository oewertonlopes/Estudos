//window.history.pushState(null, null, "sobre.html");

//window.addEventListener("popstate", () => {
//  console.log("teste");
//});

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  document.querySelector(".content").innerHTML = "Carregando...";
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  //console.log(pageText);
  replaceContent(pageText);
}

function replaceContent(newText) {
  const newHtml = document.createElement("div");
  newHtml.innerHTML = newText;
  const oldContent = document.querySelector(".content");
  const newContent = newHtml.querySelector(".content");
  oldContent.innerHTML = newContent.innerHTML;
  const oldTitle = document.querySelector("title");
  const newTitle = newHtml.querySelector("title");
  oldTitle.innerHTML = newTitle.innerHTML;
}

window.addEventListener("popstate", () => {
  fetchPage(window.location.href);
});

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
