import React, {useState, useEffect} from 'react';

import './Emp.css';
import MapLoc from './geoloc';
import Complaint from './complaintbox';
import ImagePicker from './siteimage';
import Navbar from '../Gen_comp/Navbar';
import Footer from '../Gen_comp/Footer';

function Emp(sendData) {

    const [empData, setEmpData] = useState({});

    const [siteData, setSiteData] = useState('');
    const [complaintData, setcomplaintData] = useState('');
    const [locData, setLocData] = useState({});

    const submitHandle =() => {
        setEmpData({siteData, complaintData, locData});
    }

    const recieveLocData = (data) => {
        setLocData(data);
    }
    const recieveSiteData = (data) => {
        setSiteData(data);
    }
    const recieveComplaintData = (data) => {
        setcomplaintData(data);
    }

    return(
        <div className='main_body'>
            <div className='header'>
                <Navbar/>
            </div>
            
            <MapLoc sendLocData={recieveLocData}/>

            <section className="complaint-image-section">
            <div className="complaint-box-wrapper">
                <Complaint sendComplaintData={recieveComplaintData} />
            </div>
            <div className="image-picker-wrapper">
                <ImagePicker sendSiteData={recieveSiteData} />
            </div>
            </section>


            <button onClick={submitHandle}>Submit Complaint</button>

            <div className='footer'>
                <Footer/>
            </div>
            
        </div>
    )

}

export default Emp;