/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import './prepareBill.css';

class PrepareBill extends React.Component {
    constructor(props) {
        super(props);
        this.setStudentId = this.setStudentId.bind(this);
        this.setStudentRoll = this.setStudentRoll.bind(this);
        this.setStudentClass = this.setStudentClass.bind(this);

        this.setBillDueDate = this.setBillDueDate.bind(this);
        this.setFineDate = this.setFineDate.bind(this);
        this.setMonthlyFees = this.setMonthlyFees.bind(this);
        this.setExamFees = this.setExamFees.bind(this);
        this.setLabFees = this.setLabFees.bind(this);
        this.setSSCFees = this.setSSCFees.bind(this);
        this.setHSCFees = this.setHSCFees.bind(this);
        this.setJSCFees = this.setJSCFees.bind(this);
        this.setPSCFees = this.setPSCFees.bind(this);
        this.setMedicalFees = this.setMedicalFees.bind(this);
        this.setOtherFees = this.setOtherFees.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
         this.state = {
            student_id: '',
            roll: '',
            class: '',
            bill_due_date:'',
            fine_date:'',
            monthly_fees:'',
            exam_fees:'',
            lab_fees:'',
            ssc_fees:'',
            hsc_fees:'',
            jsc_fees:'',
            psc_fees:'',
            medical_fees:'',
            other:'',
           
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

    setBillDueDate(e) {
        this.setState({
            bill_due_date: e.target.value,
        });
    }


    setFineDate(e) {
        this.setState({
            fine_date: e.target.value,
        });
    }


    setMonthlyFees(e) {
        this.setState({
            monthly_fees: e.target.value,
        });
    }

    setExamFees(e) {
        this.setState({
            exam_fees: e.target.value,
        });
    }

    setLabFees(e) {
        this.setState({
            lab_fees: e.target.value,
        });
    }

    setSSCFees(e) {
        this.setState({
            ssc_fees: e.target.value,
        });
    }

    setHSCFees(e) {
        this.setState({
            hsc_fees: e.target.value,
        });
    }

    setJSCFees(e) {
        this.setState({
            jsc_fees: e.target.value,
        });
    }

    setPSCFees(e) {
        this.setState({
            psc_fees: e.target.value,
        });
    }

    setMedicalFees(e) {
        this.setState({
            medical_fees: e.target.value,
        });
    }


    setOtherFees(e) {
        this.setState({
            other: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const billAllInfo = {

            student_id: this.state.student_id,
            roll: this.state.roll,
            class: this.state.class,
            bill_due_date:this.state.bill_due_date,
            fine_date:this.state.fine_date,
            monthly_fees:this.state.monthly_fees,
            exam_fees:this.state.exam_fees,
            lab_fees:this.state.lab_fees,
            ssc_fees:this.state.ssc_fees,
            hsc_fees:this.state.hsc_fees,
            jsc_fees:this.state.jsc_fees,
            psc_fees:this.state.psc_fees,
            medical_fees:this.state.medical_fees,
            other:this.state.other
        }

        console.log("billAllInfo: " + JSON.stringify(billAllInfo));
        axios.post('http://localhost:5000/saveBillInfo', billAllInfo)
            .then(res => console.log(res.data));

        this.setState({
            student_id: '',
            roll: '',
            class: '',
            bill_due_date:'',
            fine_date:'',
            monthly_fees:'',
            exam_fees:'',
            lab_fees:'',
            ssc_fees:'',
            hsc_fees:'',
            jsc_fees:'',
            psc_fees:'',
            medical_fees:'',
            other:''
        });
        alert('saved'); 
        window.location.reload();

    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>

                    <div className="container-fluid">
                        <h4>Prepare Student Bill</h4>
                        <div className="row ">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-4 billForm1">
                                <p className="bill-heading">student Information</p>
                                <label class="studentInfoLabel">Student-Id</label>
                                <input type="text" className="form-control" placeholder="Enter Student Id" onChange={this.setStudentId} />

                                <label class="studentInfoLabel">Roll</label>
                                <input type="text" className="form-control" placeholder="Enter Student Roll" onChange={this.setStudentRoll} />

                                <label class="studentInfoLabel">Class</label>
                                <input type="text" className="form-control" placeholder="Enter Student Class" onChange={this.setStudentClass} />

                                <p className="bill-heading1">Billing Date</p>
                                <label class="studentInfoLabel">Bill Due Date</label>
                                <input type="date" className="form-control" placeholder="Enter Bill Due Date" onChange={this.setBillDueDate} />

                                <label class="studentInfoLabel">Fine Date</label>
                                <input type="date" className="form-control" placeholder="Enter Fine Date" onChange={this.setFineDate} />
                            </div>

                            <div className="col-sm-4 billForm2">
                                <p className="bill-heading">Bill Info</p>

                                <label class="studentInfoLabel">Monthly Fees</label>
                                <input type="number" className="form-control" placeholder="Enter Monthly Fees" onChange={this.setMonthlyFees} />

                                <label class="studentInfoLabel">Exam Fees</label>
                                <input type="number" className="form-control" placeholder="Enter Exam Fees" onChange={this.setExamFees} />

                                <label class="studentInfoLabel">Lab Fees</label>
                                <input type="number" className="form-control" placeholder="Enter Lab Fees" onChange={this.setLabFees} />

                                <label class="studentInfoLabel">SSC Fees</label>
                                <input type="number" className="form-control" placeholder="Enter SSC Reg Fees" onChange={this.setSSCFees} />

                                <label class="studentInfoLabel">HSC Fees</label>
                                <input type="number" className="form-control" placeholder="Enter HSC Reg Fees" onChange={this.setHSCFees} />

                                  <label class="studentInfoLabel">JSC Fees</label>
                                <input type="number" className="form-control" placeholder="Enter JSC Reg Fees" onChange={this.setJSCFees} />

                                  <label class="studentInfoLabel">PSC Fees</label>
                                <input type="number" className="form-control" placeholder="Enter PSC Reg Fees" onChange={this.setPSCFees} />

                                 <label class="studentInfoLabel">Medical Fees</label>
                                <input type="number" className="form-control" placeholder="Enter Medical Fees" onChange={this.setMedicalFees} />

                                <label class="studentInfoLabel">Other</label>
                                <input type="number" className="form-control" placeholder="Enter Other Fees" onChange={this.setOtherFees} />

                               

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-7"></div>

                            <div className="col-sm-4 buttonSpace"><input type="submit" value="Create Bill" className="btn btn-warning saveBillButton" /></div>

                        </div>



                    </div>
                </form>
            </div>
        )
    }
}

export default PrepareBill;

