import React, {useEffect, useState} from 'react';
import './geoloc.css';

function MapLoc({sendLocData}) {
    const [mapURL, setMapURL] = useState('');
    const [lati, setLati] = useState('');
    const [long, setLong] = useState('');

    useEffect(()=> {
        if(navigator.geolocation) {
            navigator.geolocation.watchPosition(           
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;

                    setLati(lat);
                    setLong(lng);

                    const url = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
                    setMapURL(url)

                    // send to Emp.js(Parent)
                    sendLocData(mapURL, lat, lng);
                },
                (error) => {
                    console.error('Unable to get Location');
                },
                {
                    enableHighAccuracy:true,
                    timeout:10000,
                    maximumAge:0
                }
                [mapURL]
            )
        }
        else {
            console.error("Geolocation not supported");
        }
    })

    return(
        <div>
            <h2>Your Location</h2>
            <div>
                <iframe
                    id='Gmap'
                    src={mapURL}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps Location"
                    >
                </iframe>
                <p>Latitude : {lati} & Longitude : {long}</p>
            </div>
        </div>
    )
}

export default MapLoc;