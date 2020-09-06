import React from 'react';
import './App.css';
import Login from './Login';
import Summary from './Summary';
import UpdatePage from './UpdatePage';
import {Route, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
     <div>
        <Router basename={process.env.PUBLIC_URL}>
            <Route path="/" component={Login} exact/>
            <Route path="/summary" component={Summary} />
            <Route path="/updateClaimSummary" component={UpdatePage} />
        </Router>
      </div>
    )
  }
  
  export default App;
