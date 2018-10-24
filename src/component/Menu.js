import React from 'react'
import { Link } from 'react-router-dom'
import schoolImage from '../image/school.png';


const Menu = () => (
    <div>
        <nav class="navbar  navbar-default navbar-expand-sm bg-dark navbar-dark">

            <div class="navbar-header">
                <a class="navbar-brand" href="/"> <img src={schoolImage} responsive className="schoolImage" alt="logo brand" /></a>
            </div>

            <ul className="navbar-nav">

                <li><schoolImage /></li>

                <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/student_profile'>Student-Profile</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/student_status'>Student-Status</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to='/prepare_bill'>Prepare-Bill</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to='/billing'>View-Billing</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to='/payment'>Payment</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to='/view_payment'>View-Payment-Status</Link>
                </li>
                
                 <li className="nav-item">
                    <Link className="nav-link" to='/acoount_status'>Account-Status</Link>
                </li>
            </ul>



        </nav>
    </div>

    // <header>
    //     <nav>
    //         <ul>
    //             <li><Link to='/student_profile'>Student Profile</Link></li>
    //             {/* <li><Link to='/student_status'>Student Status</Link></li>
    //     <li><Link to='/billing'>Billing</Link></li>
    //     <li><Link to='/payment'>Payment</Link></li>
    //     <li><Link to='/account_status'>Account Status</Link></li> */}
    //         </ul>


    //     </nav>
    // </header>
)

export default Menu
