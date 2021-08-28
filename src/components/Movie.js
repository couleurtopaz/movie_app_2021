import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

// movie라는 component를 생성.
// props는 아래 propsTypes를 통해 정의 가능

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div className="movie">
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
            // 클릭하면 /movie-detail로 가는데 포스터의 모든 props를 보낸다
        }}>
        
            <img src={poster} alt={title} title={title} />
            <div className="movie__date">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>

            </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;