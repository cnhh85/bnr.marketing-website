import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './container/home'
function App() {
  return (
    <div className="App">
      <Route path="/" element={<Home />} />
    </div>
  );
}

export default App;
