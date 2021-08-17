import React from "react";
import Home from "pages/Home";
import PokemonBio from "pages/PokemonBio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={"/pokemon/:id"} exact component={PokemonBio} />
      </Switch>
    </Router>
  );
};

export default Routes;
