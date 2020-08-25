import React, { Component } from 'react';
import { Grid } from 'react-mdl';

class Landing extends Component {
    render() {
      return(
        <div style = {{width:'100%', margin: 'auto'}} >
            <Grid className="landing-grid">
                <div className ="block" >
                   <div className="banner-text">
                        <h5>Hello, My Name is</h5>   
                            <h1>JAHNAVI</h1> 
                            
                            <h3>Web Developer</h3>
                            <div className = "cv-btn">
                                <a href = "./resume">View CV</a>
                            </div>
                         </div>    
                        </div>
                    
                </Grid>
            </div>
        
      )
    }
}
export default Landing;