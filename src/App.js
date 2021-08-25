import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    console.log("add")
  };
  minus = () => {
    console.log("minus")
  };
  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add()}>Add</button>
        <button onClick={this.minus()}>Minus</button>
      </div>);
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
*/