import React, {useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';

import Login from './Home_UI/login';
import Emp from "./Emp_UI/Emp";
import Worker from "./Worker_UI/Worker";

function App() {

  const [complaints, setComplaints] = useState([]);

  const onSubmitComplaint = (complaint) => {
    setComplaints(prev => [...prev, complaint]);
  }

  return (
    <div className="App">
      
      <Emp ></Emp>


    </div>
  );
}

export default App;
