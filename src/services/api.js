import axios from "axios";


//url da api do blockchain
const api = axios.create({
 baseURL: 'https://blockchain.info/'

});

export default api;