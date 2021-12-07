import axios from 'axios'

export const MovieService = {
getMovies
    
}

function getMovies(){
    return axios
    .get(`https://swapi.dev/api/films`)
    .then(res => res.data)

}