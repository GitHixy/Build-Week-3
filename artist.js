const url = "https://striveschool-api.herokuapp.com/api/deezer";
const params = new URLSearchParams(document.location.search) 
const id = params.get("id") 
const main = document.getElementById('main')
const addedId = {};

const getArtist = async () => {
  const response = await fetch(url + `/artist/${id}`);
  const data = await response.json();
  console.log(data);

  main.innerHTML += `
  <div class="artist-info ">
            <div class="artistImg">
            <div id="gradient"></div>
                <img src=${data.picture_xl}
                    alt="">
                </div>
                <h1 class="text-white">${data.name}</h1>
    
            <div class="mt-4">
                <h2 class="text-white">Album consigliati</h2>
                <div id="card-container" class="card-container d-flex row justify-content-evenly mt-4 gap-4 flex-wrap">

                </div>
            </div>
        </div>
  `;
    const tracklist = await fetch(data.tracklist)
    const tracklistRes = await tracklist.json()
    const cardCont = document.getElementById('card-container')

    console.log(tracklistRes.data);
    for (const album of tracklistRes.data) {

      if (!addedId[album.album.id]) {
        cardCont.innerHTML += `
        
        <div class="card d-flex align-items-start col-lg-2">
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

getArtist();
