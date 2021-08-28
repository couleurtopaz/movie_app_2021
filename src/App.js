import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    {/* path와 component의 이름은 같을 필요가 없다 */}
    </HashRouter>
  )

}
export default App;


// 라우터는 url을 가져가서 확인 후 우리가 라우터에게 
// 무슨 명령 했는냐에 따라 해당 컴포넌트를 불러온다.


// link는 라우터 안에 있어야 한다. 