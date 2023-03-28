import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const notify = () => {
    toast.error("Error Message");
  };

  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // const [show, setShow] = useState();
  //     setShow(!show);

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
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
    } else {
      // make API call
    }
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }

    // perform all neccassary validations

    if (name ? "A to Z && a to z" : "none") {
      toast("Vale pass");
    } else {
      //    setName(false)
      toast.error(" Value false");
    }
    // navigate("/")
  };

// Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
       >
        <h6
          style={{ background: "#5fff8f" }}
          className="text-center text-success py-2 px-3 rounded fw-bold"
          >
          User {name} successfully registered!!
        </h6>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
         }}
         >
         <h5
          style={{ background: "#f79d9d" }}
          className="text-center text-danger py-2 px-3 rounded fw-bold"
         >
          Please enter all the fields
        </h5>
      </div>
    );
  };
  toast.error("Please enter all the fields");

  const myStyle = {
    width: "30rem",
    height: "4rem",
    body: "center",
    box: "3d",
    // fontFamily:'text new roman',
   };
  const myFont = {
    fontFamily: "serif",
  };

  return (

<div className="container-fluid">
     
      <div className="col-lg-12 col-md-6 col-sm-12">
        {/* <div className="col-md-12 col-sm-12  "> */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12"> </div>

            <div className="col-lg-6 col-md-4 col-sm-12">
            <div className="container">
              <div className="col-md-11 col-sm-12 row">
              <div className="form row">
                <div>
                  <h1
                    style={{ background: "#7371f7" }}
                    className="fw-bold text-center py-2 rounded text-light my-3"
                    >
                    User Registration
                  </h1>
                </div>

                {/* Calling to the methods */}
                <div className="messages">
                  {errorMessage()}
                  {successMessage()}
                </div>

                <form
                  className="form-control shadow border border-black px-4 "
                  // style={{ background: "#91b9f5" }}
                >
                  <table className="">
                    <thead>
                      <th>
                        <tr>
                          {/* Labels and inputs for form data */}
                          <label
                            style={myFont}
                            className="label fs-4 mt-2"
                            htmlFor="user"
                           >
                            Name
                          </label>
                          <input
                            style={myStyle}
                            onChange={handleName}
                            className="input form-control"
                            value={name}
                            type="name"
                            name="name"
                            placeholder="Enter Name..."
                          />
                        </tr>
                        <tr>
                          <label
                            style={myFont}
                            className="label fs-4"
                            htmlFor="email"
                           >
                            Email
                          </label>
                          <input
                            style={myStyle}
                            onChange={handleEmail}
                            className="input form-control"
                            value={email}
                            type="email"
                            name="email"
                            placeholder="Enter email..."
                            />
                        </tr>
                        <tr>
                          <label
                            style={myFont}
                            className="label fs-4"
                            htmlFor="password"
                           >
                            Password
                          </label>
                          <input
                            style={myStyle}
                            onChange={handlePassword}
                            className="input form-control"
                            value={password}
                            type="password"
                            placeholder="Enter Password..."
                          />
                        </tr>
                        <tr>
                          <label
                            style={myFont}
                            className="label fs-4"
                            htmlFor="confirmPassword"
                          >
                            Confirm Password
                          </label>
                          <input
                            style={myStyle}
                            onChange={handleConfirmPassword}
                            className="input form-control"
                            value={confirmPassword}
                            type="password"
                            placeholder="Enter Confirm Password..."
                          />
                           
                          {/* <button style={{background:'#82fdb1'}} onClick={() => navigate("/") (handleSubmit)} className="btn text-success  my-3 w-100 " type="submit">
		                           Submit
		                          </button> */}
                          {/* <button style={{background:'#82fdb1'}} className="btn text-primary  my-3 fs-6 mb-3  w-100" onClick={() => notify("Password don't matched")(handleSubmit)}>Submit</button> */}

                          <button
                            style={{ background: "#82fdb1" }}
                            className="btn text-primary  my-3 fs-6 mb-3  w-100"
                            onClick={handleSubmit}
                          >
                          Submit
                          </button>
                          <button
                            style={{ background: "#82fdb1" }}
                            className="btn text-primary  my-3 fs-6 mb-3  w-100"
                            onClick={notify}
                           >
                            Check It
                          </button>
                          <span className="form-input-login">
                           Already have an account? Login <a href="/">here</a>
                          </span>
                          <ToastContainer />
                          {/* <button onClick={notify}>Click Me!</button> */}
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
        {/* </div> */}
      </div>
    </div>
  );
};
export default Registration;


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
