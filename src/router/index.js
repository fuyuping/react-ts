import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//引入页面
import Test from "../page/test";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
