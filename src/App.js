import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/Login-page";
import PlaylistPage from "./pages/Play-list";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/playlist/:uuid">
          <PlaylistPage />
        </Route>
        <Route path="/playlist">
          <PlaylistPage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
