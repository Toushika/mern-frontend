/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import axios from 'axios';

import './billing.css';


class Billing extends React.Component {


  state = {
    billData: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/viewAllBill')
      .then(res => {
        console.log(res);
        const billData = res.data;
        this.setState({ billData });
      })
  }

  render() {
    return (
      <div className="container-fluid">
        <h3>Student Bill Info</h3>

        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">

            <Table responsive hover>
              <tr>
                <th>sl#</th>
                <th>Student-Id</th>
                <th>Roll</th>
                <th>Class</th>
                <th>Due-Date</th>
                <th>Fine-Date</th>
                <th>Monthly-Fees</th>
                <th>Exam-Fees</th>
                <th>Lab-Fees</th>
                <th>SSC-Fees</th>
                <th>HSC-Fees</th>
                <th>JSC-Fees</th>
                <th>PSC-Fees</th>
                <th>Medical-Fees</th>
                <th>other</th>
                <th>Total</th>
              </tr>
              {this.state.billData.map(function (bill, index) {
                return <tr>
                  <td key={index}>{index + 1}</td>
                  <td key={index}>{bill.student_id}</td>
                  <td key={index}>{bill.roll}</td>
                  <td key={index}>{bill.class}</td>
                  <td key={index}>{bill.bill_due_date}</td>
                  <td key={index}>{bill.fine_date}</td>
                  <td key={index}>{bill.monthly_fees}</td>
                  <td key={index}>{bill.exam_fees}</td>
                  <td key={index}>{bill.lab_fees}</td>
                  <td key={index}>{bill.ssc_fees}</td>
                  <td key={index}>{bill.hsc_fees}</td>
                  <td key={index}>{bill.jsc_fees}</td>
                  <td key={index}>{bill.psc_fees}</td>
                  <td key={index}>{bill.medical_fees}</td>
                  <td key={index}>{bill.other}</td>
                  <td key={index}>{bill.total_bill}</td>

                </tr>;
              })}
            </Table>

          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>



    )
  }

}

export default Billing;