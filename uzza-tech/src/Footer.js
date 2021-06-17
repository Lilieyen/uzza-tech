import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div id="footer">
    <p class="left">SERVICES
    <br />Vegetable Home Delivery
    
    <Link to="./landingPage"><br />Want to know more about UzzaTech's Seller central?
    </Link>
    <br />
    </p>
    <p class="right">CONTACT US
    <br />Help Center and FAQs

    <br />uzzatech@gmail.com
    <br />
    </p>
    <p class="centered">ABOUT US
    <br/>Company

    <br />Team
    <br />
    </p>
</div>
    )
}

export default Footer;
