const url = "https://striveschool-api.herokuapp.com/api/deezer";

const getData = async () => {
  const response = await fetch(url + "/artist/412");
  const data = await response.json();

  console.log(data);
};

getData();
