import React, { useState, useEffect }from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import './navbar.css';


const Navbar = () => {
    return(
        <div className="navbar">
            <FontAwesomeIcon
                icon={faHome}
                className="home-icon"
                size="3x"
            />

            <div className='title'>
                Finance Advisor
            </div>
        </div>
    )
}

export default Navbar;