import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  return(
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar></Navbar>
        <Switch>
          <Route path="/auth" exact component={Auth}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  )
};

export default App;
