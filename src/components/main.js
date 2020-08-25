import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Resume from './resume';
import Portifolio from './portifolio';
import Contact from './contact';
import Login from './login';
import Admin from './admin';

const Main = () => (
 
  <Switch>
    <Route exact path = "/" component = {LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path= "/resume" component={Resume} />
    <Route path= "/portifolio" component= {Portifolio} />
    <Route path= "/contact" component= {Contact} />
    <Route path= "/login"  component ={Login}  />
    <Route exact ="/admin" component = {Admin} />
    
    
  </Switch>

) 
     
export default Main;
;