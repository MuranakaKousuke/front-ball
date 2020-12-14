import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Container from './views/components/templates/Container';
import Top from './views/pages/Top';
import Player from './views/pages/Player';
import Players from './views/pages/Players';
import SignUp from './views/pages/SignUp';
import SignIn from './views/pages/SignIn';


function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path='/' component={Top} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login/new" component={SignIn} />
          <Route exact path="/players" component={Players} />
          <Route exact path="/players/:id" component={Player} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;