import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Preference from './preference/preference';
import Portfolio from './portfolio/portfolio';

const App = () => {
  return(
      <div>
        <header>
          <Navbar />
        </header>

        <Route exact path="/home" component={Preference} />
        <Route exact path="/calculator" component={Portfolio} />
      </div>
  )
}

export default App;

