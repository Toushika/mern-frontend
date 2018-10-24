/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import axios from 'axios';

import './prepareBill.css';

class PrepareBill extends React.Component {


    constructor(props) {
        super(props);
        this.setStudentId= this.setStudentId.bind(this);
        this.setStudentRoll = this.setStudentRoll.bind(this);
        this.setStudentClass = this.setStudentClass.bind(this);
        // this.handleClick=this.handleClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            student_id: '',
            roll: '',
            class: '',
            billData: [],
            totalBill: []
        }
      }
    

    
  
    componentDidMount() {
        axios.get('http://localhost:5000/prepareBillType')
            .then(res => {
                const billData = res.data;
                console.log(billData);
                this.setState({ billData });
            });
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
      

    handleClick = (key, value) => {
        console.log('key', key);
        console.log('value', value);
        var temp = [];
          temp.push(this.state.totalBill);
        temp.push(key,value);
        console.log(temp);
        this.setState({
            totalBill: temp,
               
        });
    }



    onSubmit(e) {
        e.preventDefault();
    
        const billAllInfo = {
    
          student_id: this.state.student_id,
          roll: this.state.roll,
          class: this.state.class,
          totalBill:this.state.totalBill
       
    
        }
        console.log("billAllInfo: " + JSON.stringify(billAllInfo));
        axios.post('http://localhost:5000/studentBillInfo', billAllInfo)
          .then(res => console.log(res.data));
    
        this.setState({
          student_id: '',
          roll:'',
          class:'',
          billData:[],
          totalBill:[]
       
        });
    
      }

    render() {

        let billItemsCheckBox = this.state.billData.map(
            (bill, index) =>
                <div className="col-sm-5">

                    <label>
                        <input type="checkbox" name="myCheckBox1" onClick={(e, data) => this.handleClick(bill.bill_type, bill.amount)} />
                        {" " + bill.bill_type}
                    </label>
                </div>
        );
        return (
            <div className="optionClass">

                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <h4 className="studentBillHeading">Prepare Bill For Student</h4>
                    </div>
                    <div className="col-sm-4"></div>

                </div>


                <form onSubmit={this.onSubmit}>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-1"></div>

                            <div className="col-sm-4 studentBasicInfo">
                                <label class="studentInfoLabel">Student-Id</label>
                                <input type="text" className="form-control" placeholder="Enter Student Name" onChange={this.setStudentId} />

                                <label class="studentInfoLabel">Roll</label>
                                <input type="text" className="form-control" placeholder="Enter Student Roll"  onChange={this.setStudentRoll} />

                                <label class="studentInfoLabel">Class</label>
                                <input type="text" className="form-control" placeholder="Enter Student Class" onChange={this.setStudentClass}/>

                            </div>


                            <div className="col-sm-1"></div>
                            <div className="col-sm-4">
                                <label className="feesLabel">Choose Fees For Student</label>
                                {billItemsCheckBox}
                            </div>
                            <div className="col-sm-1"></div>
                        </div>

                        <div className="saveBill">
                            <input type="submit" value="Create Bill" className="btn btn-warning saveBillButton" />

                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default PrepareBill;

