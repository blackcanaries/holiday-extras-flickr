import axios from "axios";

export const photoService = {
  updatePhotos,
  searchPhotos
};

const API_URL = "https://api.flickr.com/services/rest";
const api_key = "36acad033b121a122b6013fbe0e78640";
const extras = "owner_name,tags,views,description,url_n,url_l";
const methods = ["flickr.photos.getRecent", "flickr.photos.search"];
const per_page = 20;
const sort = "relevance";
const page = 1;

function updatePhotos(search = { method: 0, text: "", tags: "", page: 1 }) {
  search.page = search.page + 1 || 1;

  return axios
    .get(
      `${API_URL}/?method=${
        methods[search.method]
      }&api_key=${api_key}&sort=${sort}&page=${
        search.page
      }&per_page=${per_page}&extras=${extras}&text=${search.text}&tags=${
        search.tags
      }&format=json&nojsoncallback=1&safe_search=1&safe=1`
    )
    .then(handleResponse);
}

function searchPhotos(search = { method: 0, text: "", tags: "", page: 1 }) {
  return axios
    .get(
      `${API_URL}/?method=${
        methods[search.method]
      }&api_key=${api_key}&sort=${sort}&page=${page}&per_page=${per_page}&extras=${extras}&text=${
        search.text
      }&tags=${search.tags}&format=json&nojsoncallback=1&safe_search=1&safe=1`
    )
    .then(handleResponse);
}

function handleResponse(response) {
  return response.data;
}
