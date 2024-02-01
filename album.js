import { getAlbum } from "./components/getAlbum.js";

const params = new URLSearchParams(document.location.search) 
const id = params.get("id") 
  
getAlbum(id);