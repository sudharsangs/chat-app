import { Route, BrowserRouter as Router } from "react-router-dom";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import React from "react";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
};

export default App;
