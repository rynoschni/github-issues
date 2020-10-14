import React from 'react';
import IssuesList from './components/IssueList';
import { BrowserRouter as Router } from 'react-router-dom';

import { Container } from 'bloomer';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
        <IssuesList />
        </Container>
      </Router>
    </div>
  );
}

export default App;
