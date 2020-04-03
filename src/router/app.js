import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../container/Layout';
import Home from '../container/Home';
import HomeB from '../container/HomeB';
import HomeC from '../container/HomeC';
import '../styles/App.styl';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/B" component={HomeB} />
        <Route exact path="/C" component={HomeC} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
