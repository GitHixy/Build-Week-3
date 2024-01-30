const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";
const cardCont = document.getElementById("card-container");

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data.data);
  data.data.map((found) => {
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

    const albumImg = document.getElementsByClassName("album-img")
    const artistText = document.getElementsByClassName("card-text")

    for (const album of albumImg) {
        album.addEventListener('click', () => {
            console.log(album.closest('img').attributes.id.value);
        })
    }

    for (const artist of artistText) {
        artist.addEventListener('click', () => {
            console.log(artist.closest('p').attributes.id.value);
        })
    }

  });
};

getData();
