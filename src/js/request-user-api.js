import axios from 'axios';

async function fetchImageByRequest(userRequest, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '39814880-91b7576ccc5e80a07358d5945';
  const options = {
    key: KEY,
    q: userRequest,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
  };

  

  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${userRequest}&per_page=40&image_type=photo&orientation=horizontal&safesearch=true&page=${page}`,
    options
  );
  
  return response;
}
export { fetchImageByRequest };