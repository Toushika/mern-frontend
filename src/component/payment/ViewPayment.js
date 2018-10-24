
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

class ViewPayment extends React.Component {
 state = {
    paymentstatus: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/viewPaymentStatus')
      .then(res => {
        console.log(res);
        const paymentstatus = res.data;
        this.setState({ paymentstatus });
      })
  }

  render() {
    return (
      <div className="container-fluid tableDesign">
        <h3>View Payment Details</h3>
        <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
        
        <Table responsive hover>
        <tr>
          <th>Sl#</th>
          <th>Student-Id</th>
          <th>Roll</th>
          <th>Class</th>
          <th>Payment-Method</th>
          <th>Paid-Ammount</th>
        </tr>
          {this.state.paymentstatus.map(function (paymentData, index) {
            return <tr>
              <td key={index}>{index + 1}</td>
              <td key={index}>{paymentData.student_id}</td>
              <td key={index}>{paymentData.roll}</td>
              <td key={index}>{paymentData.class}</td>
              <td key={index}>{paymentData.payment_method}</td> 
              <td key={index}>{paymentData.paid_amount}</td> 



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

export default ViewPayment;