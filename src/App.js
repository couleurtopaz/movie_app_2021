import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading ...</span>

          </div>
        ) : (
          // object를 풀어줄때 map 함수 사용, jsx에서는 props를 통해서 값을 전달한다.
          // key는 표현되지 않지만 필수 props
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }

}

export default App;

/*

application 은 render 실행
isLoading 이 true 일때 , application이 mount된 후 getMovies function 호출
getMovies 는 axions.get 을 사용하지만 시간이 조금 필요하므로 await 삽입

*/