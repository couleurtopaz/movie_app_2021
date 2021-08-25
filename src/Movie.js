import React from "react";
import PropTypes from "prop-types";

// movie라는 component를 생성.
// props는 아래 propsTypes를 통해 정의 가능

function Movie({ id, year, title, summary, poster }) {
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
};

export default Movie;