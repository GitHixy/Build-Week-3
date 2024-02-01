import { getAlbum } from "./components/getAlbum.js";

const url = "https://striveschool-api.herokuapp.com/api/deezer";
const params = new URLSearchParams(document.location.search) 
const id = params.get("id") 
  
getAlbum(id);