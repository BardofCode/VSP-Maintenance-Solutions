import React, {useState, useEffect} from "react";

import './workload.css';

function Workload() {
    return(
        <div className="workForce">
            <textarea id='pending' readOnly='true'></textarea>
            <textarea id='available' readOnly='true'></textarea>
            <textarea id='finished' readOnly='true'></textarea>
        </div>
    )
}

export default Workload;