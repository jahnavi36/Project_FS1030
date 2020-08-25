import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Portifolio extends Component {
  render() {
    return (
      <div className="portfolio-body">
        <Grid className = "portifolio-grid">  
          <Cell col = {6}>
             <h1>Project</h1>               
            <img
              src="mobile.jpg" alt="mobile" 
              style={{width:'90%', height:'65%', paddingTop: '0em', marginleft:'10px'}}
               />
          
          </Cell>
          <Cell col={6}>
             <h4 style= {{marginleft:'10px' ,fontweight:'50' ,fontFamily:'sans-serif',paddingTop: '4em'}}>Ranking Fraud Detection For Mobile Apps</h4>
             <p style={{ marginleft:'10px' ,width:'100%', fontFamily:'sans-serif'}}>Ranking fraud in the mobile App market refers to fradulent activities,which
                means app developers giving fake rating and reviews,which have a purpose of
                pushing their apps in the popularity list.For this problem our project gives 
                to choose a original app to user based on historical data and some fraud evidences.
                Ranking fraud in the mobile App market refers to fraudulent or deceptive activities
                which have a purpose of bumping up the Apps in the popularity list. Indeed, it becomes
                more and more frequent for App developers to use shady means, such as inflating their
                apps sales or posting phone App ratings, to commit ranking fraud. While the importance
                of preventing ranking fraud has been widely recognized, there is limited understandin
                and research in this To this end, in this paper, we provide a holistic view of ranking
                fraud and propose a ranking fraud detection system for mobile Apps. Specifically,first  
                propose to accurately locate theranking fraud by mining the active periods, namely leading
                sessions of mobile Apps.
             </p>
          </Cell>
        </Grid>
      </div>
    )
    }     
 }

export default Portifolio;
  