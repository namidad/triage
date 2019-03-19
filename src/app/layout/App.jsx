import React, { Component } from "react";
import TriageDetailedPage from '../../features/triage/TriageDashboard/TriageDashboard'
import NavBar from "../../features/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>

        <Route
        path="/(.+)"
        render={() => (
          <div>
          <NavBar />
          <Container className="main">
            <Switch>
              <Route path='/triage' component={TriageDetailedPage}/>
            </Switch>
          </Container>
          </div>
        )} />
      </div>
    );
  }
}

export default App;
