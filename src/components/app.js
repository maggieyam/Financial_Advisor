import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import PreferenceContainer from './preferences/preference_container';
// import Portfolio from './portfolio/portfolio';

const App = () => {
  return(
      <div>
        <header>
          <Navbar />
        </header>

        <Route exact path="/" component={PreferenceContainer} /> 
        {/* <Route exact path="/calculator" component={Portfolio} /> */}
      </div>
  )
}

export default App;

