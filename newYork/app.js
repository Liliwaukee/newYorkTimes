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
  const article = data.response.docs;

  const allArticles  = article.map( (article, index) => {
    if(index < 5){
      const title = article.headline.main;
      const snippet = article.snippet;
      const urlNews = article.web_url;

      //const imageNYT = article.multimedia[index<1].url;


      let titleNews = document.createElement("h4");
      let snippetNews = document.createElement("li");
      let btnNews = document.createElement("a");
      let imgNews = document.createElement("img");

      btnNews.setAttribute("href", urlNews);
      //imgNews.setAttribute("src", "https://www.nytimes.com/" + imageNYT)

      titleNews.innerText = title;
      snippetNews.innerText = snippet;
      btnNews.innerText = "View the news";

      responseContainer.appendChild(titleNews);
      responseContainer.appendChild(snippetNews);
      //responseContainer.appendChild(imgNews);
      responseContainer.appendChild(btnNews);
    }
  });
}

function handleError(){
  console.log("se ha presentado un error");
}
