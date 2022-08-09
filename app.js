import { database, fetchMovieAvailability, fetchMovieList } from "./api.js";

var data = [];
async function fetchData() {
  let loader = document.getElementById("loader");
  setTimeout(() => {
    loader.innerHTML = "Loading...";
  }, 500);
  setTimeout(() => {
    loader.innerHTML = "";
  }, 600);
  let response = await fetchMovieList();
  data = response;
  console.log(data);
  let main = document.getElementsByTagName("main")[0];

  let movieHolder = document.createElement("div");
  movieHolder.className = "movie-holder";
  for (let i = 0; i < data.length; i++) {
    let movie = document.createElement("a");
    movie.href = `/${data[i].name}`;
    movie.className = "movie-link";
    movie.innerHTML = `<div class="movie" data-d="moviename">
      <div class="movie-img-wrapper" style="background-image: url(${data[i].imgUrl})" ></div>
      
      <h4 >${data[i].name}</h4>
    </div>`;
    console.log(movie);
    movieHolder.appendChild(movie);
  }
  main.appendChild(movieHolder);
}
fetchData();
console.log(main);
// }
// showData();
