import React from "react";

const Form = () =>{
    return(
        <>
            <label>Name <sup><span style={{color:'red'}}>*</span></sup></label>
            <input type="text" name="name" placeholder="Enter Your Name" required></input><br></br>

            <label>Mobile</label>
            <input type="number" name="mobile" placeholder="Enter Your Mobile"></input><br></br>

            <label>Email ID</label>
            <input type="email" name="email" placeholder="Enter Email ID"></input><br></br>

            <label>Date of Birth</label>
            <input type="date" name="dob"></input><br></br>

            <label>Gender</label>
            <input type="radio" name="gender" value={'male'}></input> Male 
            <input type="radio" name="gender" value={'female'}></input> Female 
            <input type="radio" name="gender" value={'other'}></input> Other <br></br>

            <label>Religion</label> 
            <select name="religion">
                <option disabled selected value={''}>--Select Religion--</option>
                <option value={'hindu'}>Hindu</option>
                <option value={'islam'}>Islam</option>
                <option value={'sikh'}>Sikh</option>
                <option value={'other'}>Other</option>
            </select><br></br>

            <label>Message</label>
            <textarea></textarea><br></br>

            <label>Image</label>
            <input type="file"></input><br></br>

            <label>Password</label>
            <input type="password" name="pass"></input><br></br>

            <input type="checkbox" name="check"></input> Confirm <br></br>

            <button>Submit</button>
        </>
    )
}

export default Form