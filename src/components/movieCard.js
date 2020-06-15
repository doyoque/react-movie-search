import React from 'react';

function movieCard({movie}) {

	return (
		<div className="card-list">
			<div className="card" key={movie.id}>
				<img className="card--image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title + ' poster'}
				/>

				<div className="card--content">
					<h3 className="card--title">{movie.title}</h3>
					<p><small>RELEASE DATE: {movie.release_date}</small></p>
					<p><small>RATING: {movie.vote_average}</small></p>
					<p className="card--desc">{movie.overview}</p>
				</div>
			</div>
		</div>
	);
}

export default movieCard;