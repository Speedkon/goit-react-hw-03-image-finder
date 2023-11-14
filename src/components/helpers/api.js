import axios from 'axios';

const API_KEY = "39914806-2f3555676b3ba657a337df35e";

axios.defaults.baseURL = "https://pixabay.com/api/";


export const fetchImages = async (query, page) => {
    const response = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
};