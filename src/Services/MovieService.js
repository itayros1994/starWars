import axios from 'axios'

export const MovieService = {
getMovies
    
}

function getMovies(){
    return axios
    .get(`https://swapi.dev/api/starships`)
    .then(res => res.data)

}