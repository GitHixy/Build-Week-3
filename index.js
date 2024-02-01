import { getData } from "./components/getData.js";
import { fetchSearch } from "./components/fetchSearch.js";

export const cardCont = document.getElementById("card-container");
export const addedId = {};
export const urlSearch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
export const urlInfoFetch = "https://striveschool-api.herokuapp.com/api/deezer";

const search = document.getElementById("search");
const input = document.getElementById("input");

search.addEventListener("click", () => {
  input.classList.toggle("d-none");
});

getData(urlSearch);
  
input.addEventListener("change", () => {
  fetchSearch(input.value, cardCont);
})
  