import { addedId } from "../index.js";
import { iteraAlbumECanzoni } from "./iteraAlbumECanzoni.js";

export const getData = async (url) => {
    const response = await fetch(url + "queen");
    const data = await response.json();
    const cardCont = document.getElementById("card-container");
  
    data.data.map((found) => {
      if (!addedId[found.album.id]) {
        cardCont.innerHTML += `
        <div class="card d-flex align-items-start col-lg-2">
        <img
            id=${found.album.id}
          src=${found.album.cover_big}
          class="album-img"
          alt=""
        />
        <div class="card-body pt-0">
          <h5 class="card-title text-white">${found.album.title}</h5>
          <p id=${found.artist.id} class="card-text">
            ${found.artist.name}
          </p>
        </div>
      </div>`;
        addedId[found.album.id] = true;
      }
  
      iteraAlbumECanzoni()
  })
}