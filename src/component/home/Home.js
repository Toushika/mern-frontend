import React from 'react'
import SchoolManageMent from '../../image/school-management.jpg';
import { Jumbotron, Button } from 'reactstrap';
import  './home.css'
 

const Home = () => (
  <div class="container imageContainer">
  
    <div class="row">
      <div class="col-sm-2"></div>
      <div class="col-sm-8">
      {/* <img src={SchoolManageMent}/> */}
      <h3>Welcome to Student Portal</h3>

      <Jumbotron>
         <img className="schoolImage" src={SchoolManageMent} responsive  alt="school logo"/>
    
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      
      </div>
  
   
     
  <div class="col-sm-2"></div>

    </div>
  
  </div>
)

export default Home