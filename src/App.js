import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.5
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  }
];


function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

// isRequired 안붙이면 null값이여도 괜찮은 것 


function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
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
*/