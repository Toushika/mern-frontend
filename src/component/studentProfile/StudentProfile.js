/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import axios from 'axios';

import './studentProfile.css';


class StudentProfile extends React.Component {


  state = {
    studentData: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/getAllStudentInfo')
      .then(res => {
        console.log(res);
        const studentData = res.data;
        this.setState({ studentData });
      })
  }

  render() {
    return (
      <div className="container-fluid">
        <h3>Student Info</h3>
        <div className="row">
      
          <div className="col-sm-12">

            <Table responsive hover>

              <th>Sl#</th>
              <th>S-Id</th>
              <th>FName</th>
              <th>LName</th>
              <th>Gender</th>
              <th>Parent-Id</th>
              <th>DOB</th>
              <th>Nationality</th>
              <th>Religion</th>
              <th>B-Group</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Phone</th>
              <th>Village</th>
              <th>House</th>
              <th>Road</th>
              <th>Sector</th>
              <th>Post-Office</th>
              <th>Post-Code</th>
              <th>Upazilla</th>
              <th>District</th>
              <th>Status</th>
              {this.state.studentData.map(function (student, index) {
                return <tr>
                  <td key={index}>{index + 1}</td>
                  <td key={index}>{student.student_id}</td>
                  <td key={index}>{student.name.first_name}</td>
                  <td key={index}>{student.name.last_name}</td>
                  <td key={index}>{student.gender}</td>
                  <td key={index}>{student.parent_id}</td>
                  <td key={index}>{student.date_of_birth}</td>
                  <td key={index}>{student.nationality}</td>
                  <td key={index}>{student.religion}</td>
                  <td key={index}>{student.blood_group}</td>
                  <td key={index}>{student.email}</td>
                  <td key={index}>{student.mobile_no}</td>
                  <td key={index}>{student.land_phone}</td>
                  <td key={index}>{student.address.village}</td>
                  <td key={index}>{student.address.house_no}</td>
                  <td key={index}>{student.address.road_no}</td>
                  <td key={index}>{student.address.sector}</td>
                  <td key={index}>{student.address.postOffice}</td>
                  <td key={index}>{student.address.post_code}</td>
                  <td key={index}>{student.address.upazilla}</td>
                  <td key={index}>{student.address.district}</td>
                  <td key={index}>{student.status}</td>

                </tr>;
              })}
            </Table>




          </div>
       


        </div>




      </div>



    )
  }

}

export default StudentProfile;