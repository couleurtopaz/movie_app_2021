import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>
  }

}



export default App;


/*

application 은 render 실행
isLoading 이 true 일때 , application이 mount된 후 getMovies function 호출
getMovies 는 axions.get 을 사용하지만 시간이 조금 필요하므로 await 삽입

*/