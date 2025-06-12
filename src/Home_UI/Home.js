import React, {useState, useEffect} from "react";

function Home() {

    const [userType, setuserType] = useState('');

    // useEffect(()=>{
        
    // })
    const handleEmployee = () => {
        setuserType('Employee');
    }
    const handleAdmin = () => {
        setuserType('Admin');
    }
    const handleWorker = () => {
        setuserType('Worker');
    }

    return(
        <div className="UserClfn">
            <form id='UserTyp'>
                <button type='submit' onClick={handleEmployee}>Admin</button>
                <button type='submit' onClick={handleAdmin}>Employee</button>
                <button type='submit' onClick={handleWorker}>Worker</button>
            </form>
        </div>
    )
}

export default Home;