import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import StudentProfile from './studentProfile/StudentProfile';
import StudentStatus from './studentStatus/StudentStatus';
import Billing from './billing/Billing';
import Payment from './payment/Payment';
import AccountStatus from './accountStatus/AccountStatus';
import PrepareBill from './prepareBill/PrepareBill';
import ViewPayment from './payment/ViewPayment';


const Routes = () => (
  <div >
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/student_profile' component={StudentProfile} />
      <Route exact path='/student_status' component={StudentStatus} />
      <Route exact path='/billing' component={Billing} />
      <Route exact path='/payment' component={Payment} />
      <Route exact path='/acoount_status' component={AccountStatus} />
      <Route exact path='/prepare_bill' component={PrepareBill} />
      <Route exact path='/view_payment' component={ViewPayment} />
    </Switch>
  </div>
)

export default Routes
