import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div className = "about-body">
        <Grid className = "about-grid">
          <Cell col = {6}>
            <h2>ABOUT ME</h2>
            <img 
               src= "profile.png" 
               alt= "avatar" 
               style ={{width:'400px',height:'355px'}} 
               />                                                 
          </Cell>
          <Cell col={6}>
          
            <p style = {{ width: '500px', margin: 'auto', paddingTop: '6em'}}>I am, Jahnavi Munagala,a full-stack developer with two years of experience in designing and implementing web applications using HTML, CSS, Java and my SQL. I have a bachelor’s 
                          degree in Computer Science and worked at a top multinational IT firm in building new applications.</p>    
            <div className="info">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily: 'Roboto'}}>
                  <label>Location:            </label>
                      Toronto
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily: 'Roboto'}}>
                  <label>Experience:          </label>
                   1 year                 
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily: 'Roboto'}}>
                  <label>E-mail:        </label>
                    jahnavi.munagala94@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '15px', fontFamily: 'Roboto'}}>
                  <label>Phone:       </label>
                    647-861-3459
                  </ListItemContent>
                </ListItem>


              </List>
              <div className="social">
            <a href="https://facebook.com/"  target="_blank"rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><i class="fa fa-pinterest"></i></a>
        </div>
            </div>
            
          
          </Cell>
          
        </Grid>
        

      </div>
       
    ) 
  }
}

export default About;
