import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Register from './containers/Register';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' exact component={Register}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


