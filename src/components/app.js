import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import PreferenceContainer from './preferences/preference_container';
import PortfolioContainer from './portfolio/portfolio_container';

const App = () => {
  return(
      <div>
        <header>
          <Navbar />
        </header>

        <Route exact path="/" component={PreferenceContainer} /> 
        <Route exact path="/calculator/:level" component={PortfolioContainer} />
      </div>
  )
}

export default App;

