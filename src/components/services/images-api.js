import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '22757260-8bf01f31159bf4c0176c9a303';

const fetchImages = ({ searchQuery = '', currentPage = 1, perPage = 12 }) => {
  return axios
    .get(
      `${BASE_URL}/?q=${searchQuery}&page=${currentPage}&per_page=${perPage}&key=${API_KEY}&image_type=photo&orientation=horizontal`,
    )
    .then(response => response.data.hits);
};

export default { fetchImages };
