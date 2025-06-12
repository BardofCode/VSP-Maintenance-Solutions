import React, {useState, useEffect} from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className='footer_wrapper'>
        <a id='home'>Home</a>
        <a id='about_us'>About us</a>
        <a id='service'>Services</a>
        <a id='contactus'>Contact us</a>
        <a id='privacypolicy'>Privacy Policy</a>
        <a id='termsofuse'>Terms of use</a>
        <p>© 2025 VSP SOLS. All Rights Reserved. | Visakhapatnam Steel Plant</p>
    </div>
  )
}

export default Footer