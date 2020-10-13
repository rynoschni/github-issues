import React from 'react';
import IssuesList from './components/IssueList';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <IssuesList />
      </Router>
    </div>
  );
}

export default App;
