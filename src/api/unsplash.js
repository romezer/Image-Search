import axios from 'axios';


export default axios.create({
    baseUrl: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 0fcdbbe49eff3b855d044952981b327e58f47625459110b6013a216701efbe30'
    }
});