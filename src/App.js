import React from 'react';
import './App.css';
import Login from './Login';
import UpdatePage from './UpdatePage';
import ClaimsList from './ClaimsList';
import ReviewAndSubmit from './ReviewAndSubmit';

import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" component={Login} exact />
        <Route path="/summary" component={ClaimsList} />
        <Route path="/updateClaimSummary/:empId" component={UpdatePage} />
        <Route path="/reviewPage" component={ReviewAndSubmit} />
      </Router>
    </div>
  )
}

export default App;
