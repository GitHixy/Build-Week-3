import { getArtist } from "./components/getArtist.js";

const params = new URLSearchParams(document.location.search) 
const id = params.get("id") 

getArtist(id);
