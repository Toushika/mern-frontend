
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';



class StudentStatus extends React.Component {
 state = {
    studentData: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/getAllStudentStatus')
      .then(res => {
        console.log(res);
        const studentData = res.data;
        this.setState({ studentData });
      })
  }

  render() {
    return (
      <div className="container-fluid tableDesign">
        <h3>Student Status</h3>
        <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
        
        <Table responsive hover>
        <tr>
          <th>Sl#</th>
          <th>Student-Id</th>
          <th>Year</th>
          <th>Class</th>
          <th>Class-Roll</th>
          <th>Subject-Id</th>
        </tr>
          {this.state.studentData.map(function (student, index) {
            return <tr>
              <td key={index}>{index + 1}</td>
              <td key={index}>{student.student_id}</td>
              <td key={index}>{student.year}</td>
              <td key={index}>{student.class}</td>
              <td key={index}>{student.class_roll}</td> 
              <td key={index}>{student.Subject}</td> 



            </tr>;
          })}
        </Table>
       </div>
        <div className="col-sm-2"></div>

        </div>



      </div>



    )
  }

}

export default StudentStatus;