
import axios from 'axios'


const api = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/'
})

const api_img = axios.create({
    baseURL: 'https://dog.ceo/api/breed/'
})

export {api, api_img}
