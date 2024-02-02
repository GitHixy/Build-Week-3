import { urlInfoFetch } from "../home/index.js";

export const getArtist = async (id) => {
  let addedId = {};
  const response = await fetch(urlInfoFetch + `/artist/${id}`);
  const data = await response.json();

  main.innerHTML += `
    <div class="artist-info ">
              <div class="artistImg mb-3">
                  <img src=${data.picture_xl}
                      alt="">
                  </div>
                  <h1 class="text-white">${data.name}</h1>
      
              <div class="mt-4">
                  <h2 class="text-white">Album consigliati</h2>
                  <div id="card-container-artist" class="card-container row mt-4 gap-4 flex-wrap">
  
                  </div>
              </div>
          </div>
    `;
  const tracklist = await fetch(data.tracklist);
  const tracklistRes = await tracklist.json();
  const cardCont = document.getElementById("card-container-artist");

  for (const album of tracklistRes.data) {
    if (!addedId[album.album.id]) {
      cardCont.innerHTML += `   
        <div class="card d-flex align-items-start col col-lg-2 col-md-4 col-sm-6 col-12">
          <img
            id=${album.album.id}
            src=${album.album.cover_big}
            class="album-img"
            alt=""
          />
          <div class="card-body pt-0">
            <h5 class="card-title text-white">${album.album.title}</h5>
            <p id=${album.album.id} class="card-text">
              ${album.artist.name}
            </p>
          </div>
      </div>`;
      addedId[album.album.id] = true;
    }
  }
};
