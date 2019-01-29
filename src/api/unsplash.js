import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID 036fb9d0e27f7705c9e931c9246ca7254610bdd16d6ff470cfd9d82d1759b5ad`
    }
})