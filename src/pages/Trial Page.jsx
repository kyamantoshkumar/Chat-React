// import React from "react";

// const LoginPage1 =  () => { 
  
//      const [email, setEmail] = React.useState("");
//      const [password, setPassword] = React.useState("");

//     const [submitted, setSubmitted] = React.useState(false);
//     const [error, setError] = React.useState(false);

//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//         setSubmitted(false);
//     }

//     const handlePassword = (e) => {
//          setPassword(e.target.value);
//          setSubmitted(false);
//     }

//     const handleSubmit = (e) => {
//       e.preventDefault();
//         if(email === "" || password === "" ){
//          setError(true);
//         } else {
//             setSubmitted(true);
//             setError(false);
//     }
//   }

//     const errorMessage =  () => {
//           return (
//             <div className="error" 
//             style={{display: error ? "" : "none"}}>
//                 <h6 style={{background: "#"}} 
//                  className="text-danger text-center py-2 px-3 rounded fw-bold"> 
//                    Please enter All the Field
//                  </h6>
//             </div>
//           )
//     }

//     const successMessage = () => {
//           return (
//              <div className="success"
//               style={{ display: submitted ? "" : "none" }}>
//                 <h6 
//                 style={{background: "#5fff8f"}}
//                  className="text-success text-center rounded py-2 px-3 fw-bold">
//                   Login Successfully
//                 </h6>
//               </div>
              
//           )
//     }
//      const myStyle = {
//           width: "10px",
//      }
//     const myFont = {
//         fontFamily: "serif"
//     }
//    return(
//       <div className="container">
//         <div className="col-md-4 col-sm-12"> Set1</div>
//            <div className="row">
//            <div className="col-md-8 col-sm-12">
//             <div className="col-md-12 col-sm-12"> 
//              <div>
//                  {errorMessage()}
//                  {successMessage()}
//              </div>
//                 <form>
//                     <table> 
//                         <th>
//                              <tr>
//                                 <label style={{myFont}} className="text-bold mx-2 fs-4">
//                                     Email
//                                 </label>
//                                 <input className="input form-control"
//                                  type="email" 
//                                  placeholder="Enter email"
//                                  name="email"
//                                  id="email"
//                                  onChange={handleEmail}/>
//                              </tr>
//                              <tr>
//                                 <label 
//                                    style={{myFont}}
//                                    className="text-bold mx-2 fs-4"
//                                    htmlFor="psw">
//                                     Password
//                                 </label>
//                                 <input 
//                                   className="input form-control"
//                                   type="password"
//                                   placeholder="Enter Password"
//                                   name="pwd"
//                                   id="pwd" 
//                                   onChange={handlePassword}/>
//                              </tr>
//                         </th>
//                     </table>
//                       <div className="">
//                         <button style={{background: "#7afcb0"}}
//                           className="btn mx-2 text-light fs-6 text-bold"
//                           onClick={handleSubmit}>
//                             Submit
//                             </button>
//                       </div>
//                     </form>   
//              </div>
//              </div>
//            </div>
//       </div>
//    )
// }
// export default LoginPage1

// import React, { useState } from 'react';

//  const  LoginPage1 = () =>  {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation checks
//     let errors = {};
//     if (!username.trim()) {
//       errors.username = 'Username is required';
//     }
//     if (!email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!password) {
//       errors.password = 'Password is required';
//     } else if (password.length < 6) {
//       errors.password = 'Password must be at least 6 characters';
//     }
//     if (!confirmPassword) {
//       errors.confirmPassword = 'Confirm password is required';
//     } else if (password !== confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match';
//     }

//     if (Object.keys(errors).length === 0) {
//       // Registration logic
//       console.log('Registration success');
//       alert('Registration success')
//     } else {
//       setErrors(errors);
//     }
//   };

//   return (
//     <div>
//       <h1>Registration Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
//           {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//           {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default LoginPage1;


import React, { useState } from 'react';

function LoginPage1() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (confirmPassword !== password) {
      errors.confirmPassword = 'Confirm password does not match password';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Make API call to submit form data
      console.log('Form submitted');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        {errors.username && <div className="error">{errors.username}</div>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginPage1;
