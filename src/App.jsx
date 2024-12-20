/*import { useRoutes } from "react-router"
import routes from '~react-pages'

function App() {


  return (
    <>
      {useRoutes(routes)}
    </>
  )
}

export default App*/
// src/App.js
/*import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ParticipantsProvider } from './context/PerticipantsContext';
import Signup from './pages/Signup';
import ParticipantsList from './pages/perticipantsList';

export default function App() {
  return (
    <ParticipantsProvider>
      <Router>
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/participants" component={ParticipantsList} />
        </Switch>
      </Router>
    </ParticipantsProvider>
  );
}
*/

import { useRoutes } from 'react-router';
import routes from '~react-pages';
import { ParticipantsProvider } from './context/ParticipantsContext';

function App() {
  return (
    <ParticipantsProvider>
      {useRoutes(routes)}
    </ParticipantsProvider>
  );
}

export default App;

