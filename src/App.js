import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import { LandingPage, OrderPage } from './components/Page'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles/index.css';

function App() {
  return (
    <GlobalProvider>
    <div className="container w-6/12 m-auto">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route path='/orders/:id' component={OrderPage}></Route>
        </Switch>
      </Router>
    </div>
    </GlobalProvider>
  );
}

export default App;
