import { getData } from "./components/getData.js";
import { fetchSearch } from "./components/fetchSearch.js";

export const cardCont = document.getElementById("card-container");
export const addedId = {};

const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const search = document.getElementById("search");
const input = document.getElementById("input");

search.addEventListener("click", () => {
  input.classList.toggle("d-none");
});

getData(url);
  
input.addEventListener("change", () => {
  fetchSearch(input.value);
})
  
