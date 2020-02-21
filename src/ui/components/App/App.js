import "antd/dist/antd.css";
import React from "react";
import { Route, Router } from "react-router-dom";
import { history } from "../../../utilities/history";
import Recent from "../../Pages/Recent/Recent";
import Search from "../../Pages/Search/Search";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route exact path="/" component={Recent} />
        <Route path="/search/:id" component={Search} />
      </Router>
    );
  }
}

export default App;
