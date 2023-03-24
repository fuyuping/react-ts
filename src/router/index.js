import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
//引入页面
import SetData from "../setData";
import GetData from "../getData";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/set" element={<SetData />} />
            <Route path="/get" element={<GetData />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
