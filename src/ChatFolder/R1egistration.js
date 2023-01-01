// import React, { useState } from "react"

// const ReagestrationPage = () => {

//     const [registerData, setRegisterData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//     })

//     const onClickTable = () => {
//         console.log(registerData)
//     }

//     return (
//         <>
//             <div className="conatiner">
//                 <div className="col">
//                     <div className="row">
//                         <div>
//                             <table>
//                                 <thead className="text-start">
//                                     <th>
//                                         <tr>
//                                             <label>Name</label><br/>
//                                             <input type="text"
//                                                 value={registerData.name}
//                                                 placeholder="Enter name..."
//                                                 onChange={(e) => setRegisterData({
//                                                     name:e.target.value,
//                                                     email: registerData.email,
//                                                     password: registerData.password,
//                                                     confirmPassword: registerData.confirmPassword
//                                                 })}
//                                                 className="User Form"
//                                             />
//                                         </tr>
//                                         <tr>
//                                             <label>Email</label><br/>
//                                             <input
//                                                 type="email"
//                                                 value={registerData.email}
//                                                 placeholder="Enter email...."
//                                                 onChange={(e) => setRegisterData({
//                                                     email: e.target.value,
//                                                     // email:registerData.email,
//                                                     name:registerData.name,
//                                                     password:registerData.password,
//                                                     confirmPassword: registerData.confirmPassword
//                                                 })}
//                                             />
//                                         </tr>
//                                         <tr>
//                                             <label>Password</label><br/>
//                                             <input
//                                                 type="password"
//                                                 value={registerData.password}
//                                                 placeholder="Password..."
//                                                 onChange={(e) => setRegisterData({
//                                                     password: e.target.value,
//                                                     name: registerData.name,
//                                                     email: registerData.email,
//                                                     confirmPassword: registerData.confirmPassword
//                                                 })}
//                                             />
//                                         </tr>
//                                         <tr>
//                                             <label>ConfirmPassword</label><br/>
//                                             <input
//                                                 type="password"
//                                                 value={registerData.confirmPassword}
//                                                 placeholder="Confirm Password..."
//                                                 onChange={(e) => setRegisterData({
                                                   
//                                                     name: registerData.name,
//                                                     email: registerData.email,
//                                                     password: registerData.password,
//                                                     confirmPassword: e.target.value,
//                                                 })}
//                                             />
//                                         </tr>
//                                         <button className="btn btn-secondary" onClick={onClickTable}>Save</button>
//                                     </th>
//                                 </thead>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )

// }
// export default ReagestrationPage



import { useState } from 'react';

export default function ReagestrationPage() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handleConfirmPassword = (e) => {
	setConfirmPassword(e.target.value);
	setSubmitted(false);
};
// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '' || confirmPassword === 'fill') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1 className='bg-success text-light py-2 px-3 rounded fw-bold'>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1 className='bg-danger text-light py-2 px-3 rounded fw-bold'>Please enter all the fields</h1>
	</div>
	);
};
const myStyle = {
    width:"20rem",
    height: "4rem",
    body: "center",
    fontFamily:'text new roman'
    
     }

return (
	<div className='container bg-secondary'>
        <div className='col-md-4 col-sm-12'>
        1 of 4
        </div>
        <div className='col-md-8 col-sm-12 '>
         <div className='col-md-12 col-sm-12'>
            <div className='row'>
              <div>
              <div className="form">
	<div>
		<h1 className='fs-3 bg-white fw-bold ff-timeeNewRoman text-black text-center py-2 rounded'>User Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
        <table>
            <thead>
                <th>
                    <tr>
                        {/* Labels and inputs for form data */}
		<label className="label fs-4" htmlFor="user">Name</label>
		<input 
        style={myStyle} 
        onChange={handleName} 
        className="input form-control"
		value={name} 
        type="text"
        placeholder='Enter Name...' />
          </tr>
          <tr>  
		<label className="label fs-4" htmlFor="email">Email</label>
		<input 
        style={myStyle} 
        onChange={handleEmail} 
        className="input form-control"
		value={email} 
        type="email" 
        placeholder="Enter email..." />
        </tr>
          <tr>
		<label className="label fs-4" htmlFor="password">Password</label>
		<input 
        style={myStyle} 
        onChange={handlePassword} 
        className="input form-control"
		value={password} 
        type="password" 
        placeholder='Enter Password'/>
        </tr>
        <tr>
        <label className="label fs-4" htmlFor='confirmPassword'>Confirm Password</label>
		<input 
        style={myStyle} 
        onChange={handleConfirmPassword} 
        className="input form-control"
		value={password} 
        type="password" 
        placeholder='Enter Confirm Password'/>
           
		<button onClick={handleSubmit} className="btn btn-success my-3" type="submit">
		Submit
		</button>

                    </tr>
                </th>
            </thead>
        </table>
		 	</form>
	</div>
              </div>
            </div>
         </div>
        </div>
    </div>
);
}
