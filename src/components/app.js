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
        <Route path="*" component={Page404}/>
      </div>
  )
}

const Page404 = ({ location }) => (
   <div>
      <h2>No match found for <code>{location.pathname}</code></h2>
   </div>
);

export default App;

