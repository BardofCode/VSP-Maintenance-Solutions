import React, {useState, useEffect} from 'react';

import './complaint.css';

function Complaint() {
    return(
        <div className='Complaint_Box'>
            <div className='issueBox'>
                <textarea id='problem'></textarea>
                {/* qr */}
            </div>

            <button>Accept</button>
            <button>Reject</button>
            <button>Assign</button>
        </div>
    )
}

export default Complaint;
