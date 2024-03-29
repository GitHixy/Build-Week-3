import { iteraAlbumECanzoni } from "./iteraAlbumECanzoni.js";
import { cardCont } from "../home/index.js";

export const getData = async (url) => {
  let addedId = {};
  const response = await fetch(url + "queen");
  const data = await response.json();

  data.data.map((found) => {
    if (!addedId[found.album.id]) {
      cardCont.innerHTML += `
        <div class="card d-flex align-items-start col-lg-2 col-md-4 col-sm-6 col-12">
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

    iteraAlbumECanzoni();
  });
};
