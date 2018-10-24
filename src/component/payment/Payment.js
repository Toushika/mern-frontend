/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import './payment.css';

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.setStudentId = this.setStudentId.bind(this);
        this.setStudentRoll = this.setStudentRoll.bind(this);
        this.setStudentClass = this.setStudentClass.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setPaidAmount=this.setPaidAmount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
         this.state = {
            student_id: '',
            roll: '',
            class: '',
            payment_method:'',
            paid_amount:'' 
           
        }
    }

     setStudentId(e) {
        this.setState({
            student_id: e.target.value,
        });
    }

    setStudentRoll(e) {
        this.setState({
            roll: e.target.value,
        });
    }

    setStudentClass(e) {
        this.setState({
            class: e.target.value,
        });
    }

    setPaidAmount(e){
      this.setState({
        paid_amount: e.target.value,
    });

    }

    handleChange(event) {
      this.setState({payment_method: event.target.value});
    }
    
    onSubmit(e) {
        e.preventDefault();

        const paymentInfo = {

            student_id: this.state.student_id,
            roll: this.state.roll,
            class: this.state.class,
            payment_method:this.state.payment_method,
            paid_amount:this.state.paid_amount
        }

        console.log("paymentInfo: " + JSON.stringify(paymentInfo));
        axios.post('http://localhost:5000/savePaymentInfo', paymentInfo)
            .then(res => console.log(res.data));

        this.setState({
            student_id: '',
            roll: '',
            class: '',
            payment_method:'',
            paid_amount:''
           
        });
        alert('saved'); 
        window.location.reload();

    }
    render() {
        return (
          <div class="container-fluid">
          <h4>Pay your Bill</h4>
          <div className="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
              <form onSubmit={this.onSubmit}>
                <label class="studentInfoLabel">Student-Id</label>
                <input type="text" className="form-control" placeholder="Enter Student Id" onChange={this.setStudentId} />
      
                <label class="studentInfoLabel">Roll</label>
                <input type="text" className="form-control" placeholder="Enter Student Roll" onChange={this.setStudentRoll} />
      
                <label class="studentInfoLabel">Class</label>
                <input type="text" className="form-control" placeholder="Enter Student Class" onChange={this.setStudentClass} />
      
                <label className="studentInfoLabel">Payment-Method</label>
                <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                  <option value="vouchar">Vouchar</option>
                  <option value="cash">Cash</option>
                  <option value="card">Card</option>>
                </select>
                <label class="studentInfoLabel">Paid Amount</label>
                <input type="number" className="form-control" placeholder="Enter Student Paid Amount" onChange={this.setPaidAmount} />
      
                <div className="middleButton">
                  <input type="submit" value="Pay" className="payButton btn btn-warning" />
                </div>
              </form>
      
            </div>
            <div class="col-sm-4"></div>
          </div>
      
        </div>
            
        )
    }
}

export default Payment;

