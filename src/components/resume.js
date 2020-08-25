import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
      return(
          <div>
              <Grid>
                  <Cell col = {4}>
                  <div style={{textAlign: 'center'}}>
                  <img
                src="skill.jpg"
                alt="avatar"
                style={{height: '280px', width: '350px'}}
                 />                 
          </div>

            <h2 style={{paddingTop: '0em'}}>Jahnavi</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #e22947', width: '80%'}}/>
            <p>Seeking a challenging career in a diverse environment where my strong work education can be used to help promote the mission and exceed team goals</p>
            <hr style={{borderTop: '3px solid #e22947', width: '80%'}}/>
            <h5 style={{color:'grey'}}>Address</h5>
            <p>55 Smooth rose court,M2J0G7</p>
            <h5 style={{color:'grey'}}>Phone</h5>
            <p>647-861-3459</p>
            <h5 style={{color:'grey'}}>Email</h5>
            <p>Jahnavi.munagala94@gmail.com</p>
            <h5 style={{color:'grey'}}>Freelance</h5>
            <p>Available</p>
            <hr style={{borderTop: '3px solid  #e22947', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h4 style={{color:'grey'}}>Education</h4>


            <Education
              startYear={2010}
              endYear={2012}
              schoolName="INTERMEDIATE, NARAYANA JUNIOR COLLEGE,A.P,INDIA"
              percentage= "89%"
               />

               <Education
                 startYear={2012}
                 endYear={2016}
                 schoolName="B.Tech(CSE), K.S.R.M.C.E,A.P,INDIA"
                 percentage= "81%"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h4 style={{color:'grey'}}>Experience</h4>

            <Experience
              Year={2017}
              jobName="HCL TECHNOLOGIES"
              jobDuration="I worked there for few months as a tester in the company"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h4 style={{color:'grey'}}>Skills</h4>
              <Skills
                skill="HTML/CSS"
                progress={95}
                />
                <Skills
                  skill="Oracle"
                  progress={80}
                  />
                  <Skills
                  skill="JavaScript"
                  progress={65}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />



                  </Cell>
               </Grid>
          </div>
        )
    }
}

export default Resume;          