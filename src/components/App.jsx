import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
      </div>
    );
  }
}
export default App;
