import React from 'react'

export function Favorties({favoritesMovies}) {
    return (
        <div>
            {favoritesMovies.map(movie => {
                return <div>{movie.title}</div>
            })}
        </div>
    )
}
