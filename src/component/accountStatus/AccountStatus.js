/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import axios from 'axios';

import './accountStatus.css';


class AccountStatus extends React.Component {


  state = {
    studentData: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/viewAllAccountStatus')
      .then(res => {
        console.log(res);
        const studentData = res.data;
        this.setState({ studentData });
      })
  }

  render() {
    return (
      <div className="container-fluid">
        <h3>Account Status</h3>
      </div>
    )
  }

}

export default AccountStatus;