import axios from "axios"

export default async function pullGifs(keyword){

const BASE_URL= 'https://api.giphy.com'
const API_KEY= 'DFyD8B4xYg44ienPUO0bPsn0cmsVDo0v'

// const giphy = giphyInput.value
//figure out how to link with Gifs.js input page

let response = await axios.get(`${BASE_URL}/v1/gifs/search?apikey=${API_KEY}&q=${keyword}&limit=25&rating=g`)


 console.log(response)
let search = response.data.data
return(search)
}


