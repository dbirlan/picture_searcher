import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID yxvv2Oe5HAH7R-uPzaBlGfJGSJb09dQuO2BXWmMug98',
  },
});
