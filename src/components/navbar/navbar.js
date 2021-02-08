import React, { useState, useEffect }from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/">
                <FontAwesomeIcon
                    icon={faHome}
                    className="home-icon"
                    size="3x"
                />
            </Link>

            <div className='title'>
                Finance Advisor
            </div>
        </div>
    )
}

export default Navbar;