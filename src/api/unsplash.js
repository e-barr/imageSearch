import axios from 'axios'

const unsplashApi = `${process.env.REACT_APP_UNSPLASH_API}`

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID ${unsplashApi}`
    }
})