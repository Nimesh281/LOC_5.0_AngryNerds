import axios from 'axios'

const instance = axios.create({
    baseURL:"http://localhost:5000/",
    // baseURL:"http://192.0.0.1:3001/",
})

export default instance;