import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';

function App() {
  const [startDate, setStartDate] = useState(new Date());

  // department list array
   const Department = ['select Department','UI / UX Designer',
  'Web Developer',
  'Back-end Developer',
  'Full-stach Developer',
  'Business Development']

  const [date, setDate] = useState([
    {
      firstName : '',
      lastName : '',
      DOB: '',
      Dept:''

    }
  ])

  
  return (
    <div className="all">
         <h1>Add New Employee</h1>
    <div className="inputFields">
      <div className="sub">
        <label className="frmLabel">First Name</label>
        <input className="input" type='text' placeholder='Enter First Name'></input>
      </div>
      <div>
        <label className="frmLabel">Last Name</label>
        <input className="input" type='text' placeholder='Enter Last Name'></input>
      </div>
      <div>
        <label className="frmLabel">Date of Birth</label>
        <DatePicker className="input" placeholderText="Date of Birth" selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      <div style={{display:'flex', alignItems:'center'}}>
        <label className="frmLabel">Last Name</label>
        <div className="radioParent">
          <div style={{display:'flex', alignItems:'center'}}>
            <input className="radioBtn" type='radio' />
            <label  style={{width:'50px', margin:'10px'}} >Male</label>
          </div>
          <div style={{display:'flex', alignItems:'center'}}>
            <input className="radioBtn" type='radio' />
            <label style={{width:'50px', margin:'10px'}}>Female</label>
          </div>
        </div>
      </div>
      <div>
        <label className="frmLabel">Select Department</label>
        <select className="input" >
          {Department.map((val, i) => (
            <div key={i}>
              <option>{val}</option>
            </div>
          ))}
        </select>
      </div>
      <div className="btnDiv">
          <button className="bttn">Add Employee</button>
      </div>
      </div>
    </div>
  );
}

export default App;
