import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Detail } from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie-detail/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
