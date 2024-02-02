import { urlInfoFetch } from "../home/index.js";

export const getAlbum = async (id) => {
  const response = await fetch(urlInfoFetch + `/album/${id}`);
  const data = await response.json();

  main.innerHTML += `
  <div class="artist-info">
            <div class="artistImg">
                <img src=${data.cover_xl}
                    alt="">
                </div>
                <h1 class="text-white">${data.title}</h1>
                <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Duration</th>
              </tr>
            </thead>
            <tbody id="tbody">
            </tbody>
          </table>
        </div>
  `;

  const traclkistOl = document.getElementById("tbody");
  let songNumber = 1;
  for (const track of data.tracks.data) {
    let trackDuration = (track.duration / 60).toFixed(2);
    traclkistOl.innerHTML += `
    <tr>
                <th scope="row">${songNumber}</th>
                <td>${track.title}</td>
                <td>${trackDuration}</td>
              </tr>
    `;
    songNumber += 1;
  }
};
