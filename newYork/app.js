const form = document.getElementById("search-form");
const searchField = document.getElementById("search-keyword");
const responseContainer = document.getElementById("response-container");
let searchedForText;


form.addEventListener("submit", function (e) {
  e.preventDefault();
  responseContainer.innerHTML = "";
  searchedForText = searchField.value;
  getNews();
});

function getNews() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open("GET",
  `https://api.nytimes.com/svc/search/v2/articlesearch.json?g=${searchedForText}&api-key=984c35e1048543409c697f9b15dee00b`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}

function addNews(){
  const data = JSON.parse(this.responseText);
  const article = data.response.docs[0];





  const title = article.headline.main;
  const snippet = article.snippet;

  let li = document.createElement("li");
  li.innerText = snippet;

  responseContainer.appendChild(li);
}

function handleError(){
  console.log("se ha presentado un error");
}