import React from 'react'

export function MoviePreview({movie}) {
    return (
        <div className="movie-preview-container">
        <div>{movie.name}</div>
        </div>
    )
}
