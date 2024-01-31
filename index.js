const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const cardCont = document.getElementById("card-container");
const search = document.getElementById("search");
const input = document.getElementById("input");
const addedId = {};

search.addEventListener("click", () => {
  input.classList.toggle("d-none");
});

const getData = async () => {
  const response = await fetch(url + "queen");
  const data = await response.json();

  console.log(data.data);
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

    const albumImg = document.getElementsByClassName("album-img");
    const artistText = document.getElementsByClassName("card-text");

    for (const album of albumImg) {
      album.addEventListener("click", () => {
        console.log(album.closest("img").attributes.id.value);
        window.location.assign('./album.html?id=' + album.closest("img").attributes.id.value)
      });
    }

    for (const artist of artistText) {
      artist.addEventListener("click", () => {
        console.log(artist.closest("p").attributes.id.value);
        window.location.assign('./artist.html?id=' + artist.closest("p").attributes.id.value)
      });
    }
  });
};

getData();

const fetchSearch = async () => {
  if (input.value !== "") {
    cardCont.innerHTML = "";
    const response = await fetch(url + input.value);
    const data = await response.json();
  
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
    });
  
    const albumImg = document.getElementsByClassName("album-img");
    const artistText = document.getElementsByClassName("card-text");
  
    for (const album of albumImg) {
      album.addEventListener("click", () => {
        console.log(album.closest("img").attributes.id.value);
        window.location.assign('./album.html?id=' + album.closest("img").attributes.id.value)
      });
    }
  
    for (const artist of artistText) {
      artist.addEventListener("click", () => {
        console.log(artist.closest("p").attributes.id.value);
        window.location.assign('./artist.html?id=' + artist.closest("p").attributes.id.value)
      });
    }
  };
  
  }
  
input.addEventListener("change", fetchSearch);
