import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>
  }

}


export default App;


/*
component 는 HTML을 반환하는 함수
React Application은 한번에 하나의 Component만 렌더링 가능 -> 모든 것은 application 안에 넣어주기
application 안에는 많은 component 를 넣을 수 있고, 이러한 component 안에 더 많은 component를 import 가능

component 에 정보를 보낼 수 있다.
props? componet에 넣게되는 모든 것 => 이 props는 argument로 간다 ! (여기에서 fav 가 props)
props.fav 또는 {fav}

map : function을 취해서 그 function을 array의 각 item 에 적용


prop-types : 내가 전달 받은 props가 내가 원하는 props 인지 확인
react 는 자동적으로 class component의 render method를 실행
component의 data를 바꾸기 위해 이 작업 실행

매번 state 의 상태를 변경할때마다 react는 render function을 호출해서 바꿔주길 원함
state는 object. setState는 새로운 state와 함께 render function호출

setState를 호출하면, component를 호출하고 먼저 render를 호출한 다음 업데이트가 완료되었다고
말하면 componentDidUpdate 실행
*/