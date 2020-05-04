import React, { Component } from 'react'
import Photo from './pp.jpeg';
export class About extends Component {
    render() {
        return (
            <div className="container">
           <h1>This is about page</h1>
            <div className="row">
                
                <div className="col-sm-4">
                    <div className="card card-body">
                                 
                    <img className="card-img-top" src={Photo} alt="photos"/>
                    <h3 className="card-title">Azamat Arapov</h3>
                    <h5>Software engineer</h5>
                    <h5>North American University</h5>
                    </div>
                </div>
                <div className="col-sm-8">
                <h2>About Me</h2>
     
      
          <p>Experienced Information Technology Specialist with a <br/>
      demonstrated history of working in the education management industry.<br/>
      Skilled in System Administration, MacOS, Windows, Linux, VMware, <br/>
      Computer Science, Servers, and Software Engineering. Strong information <br/>
      technology professional graduated from North American University (NAU)</p>
      <h5>Title description, Dec 7, 2017</h5>
      <p>Some text..</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum<br/>
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      </div>        
            </div>
         </div>
        )
    }
}

export default About