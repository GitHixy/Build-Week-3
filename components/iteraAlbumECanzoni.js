export const iteraAlbumECanzoni = () => {
  const albumImg = document.getElementsByClassName("album-img");
  const artistText = document.getElementsByClassName("card-text");

  for (const album of albumImg) {
    album.addEventListener("click", () => {
      window.location.assign(
        "../album/album.html?id=" + album.closest("img").attributes.id.value
      );
    });
  }

  for (const artist of artistText) {
    artist.addEventListener("click", () => {
      window.location.assign(
        "../artist/artist.html?id=" + artist.closest("p").attributes.id.value
      );
    });
  }
};
