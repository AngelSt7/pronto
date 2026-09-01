import axios from 'axios';

const apiPronto = axios.create({
    baseURL: 'https://api.geopronto.com/api',
    withCredentials: true
})

export default apiPronto;