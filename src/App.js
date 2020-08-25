import React, { Component } from 'react'
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link} from 'react-router-dom';
import Main from './components/main';

import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className= "row">
          <div className="brand-name">
            </div>
            </div>
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>                
                <Link to="/aboutme">About</Link>
                <Link to="/resume">Resume</Link>                
                <Link to="/portifolio">Portifolio</Link>                
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
        
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
                
                <Link to="/aboutme">About</Link>
                <Link to="/resume">Resume</Link>               
                <Link to="/portifolio">Portifolio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                

            </Navigation>
            
        </Drawer>
        <Content>
            <div className="page-content" />
         <Main/>   
        </Content>
        
    </Layout>
  
</div>

    );
  }
}

export default App;
