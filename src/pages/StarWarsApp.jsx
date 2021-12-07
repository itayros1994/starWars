import React, { useEffect, useState } from 'react'
import { MovieList } from '../cmps/MovieList'
import { MovieService } from '../Services/MovieService'

export function StarWarsApp() {
    const [movies, setMovies] = useState([])

useEffect(() => {
    MovieService.getMovies().then(res => {
        setMovies(res.results)
    })
}, [])

    return (
        <div>
        <MovieList movies={movies}/>
        </div>
    )
}
