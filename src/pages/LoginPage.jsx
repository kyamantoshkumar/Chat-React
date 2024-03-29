
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import Regestration from "../pages/Registration"
// import "../assets/css/login.css"
// const Login = () => {

//     const navigate = useNavigate()
//     const [email, setEmail] = useState("")
//     const [password, setPasssword] = useState("")

//     // State for checking the error
//     const [submitted, setSubmitted] = useState(false)
//     const [error, setError] = useState(false)
//     // use toast notify message
//     const notify = () => {
//         toast("");
//     }

//     // Handeling the Email change
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//         setSubmitted(false);
//     }

//     // Handeling the Password Change
//         const handlePassword = (e) => {
//             setPasssword(e.target.value)
//             setSubmitted(false)
//         }

//     // Handel Submit is login
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if(email === "" || password === "") {
//             setError(true);
//         }else{
//             setSubmitted(true)
//             setError(false)
//         }
//         navigate("/room")

//         // if(password !== Regestration.ConfirmPassword) {
//         //     toast.error("Password don't match")
//         // }else{
//         //     // make API call
//         // }
//     }

// const errorMessage = () => {
//     return (
//         <div className="error"
//           style={{
//             display: error ? "" : "none",
//           }}>
//         <h6 style={{background: "#f79d9d"}} className="text-danger text-center py-2 px-3 rounded fw-bold">Please Enter All the Field</h6>
//         </div>
//     )
// }  

// const successMessage = () => {
//     return (
//         <div className="success"
//          style={{
//             display: submitted ? "" : "none"
//          }}>
//             <h6 style={{background: "#5fff8f"}} className="text-success text-center rounded py-2 px-3 rounded fw-bold">Login Successfully</h6>
//          </div>
//     )
// }

//  return(
//      <div className="constainer-fluid">
//         {/* <div className="col-md-4 col-sm-12">
//             {/* 1 of 1 *
//         </div> */}
//         <div className="col-md-12 col-sm-12">
//             <div className="col-md-12 col-sm-12form-control login">
//                <div className="row">
//                   <div className="message">
//                     {errorMessage()}
//                     {successMessage()}
//                   </div>
//                    <h6 className="text-center">
//                     <img className="img text-center" src={require("../assets/images/user.png")} alt=""/>
//                    </h6>
//                   {/* <h6 style={{background:'#b078fa', width:'100%' }} style={{background:'#cfe7f5'}} className="fs-3 w-100 fw-bold text-light text-center py-2 rounded shadow">Login Page</h6> */}
//                 <div className="form-control form row">
//                 <form className="form">
//                   <table>
//                     <thead>
//                         <th>
//                     <tr>
//                   <label htmlFor="email"><b>Email</b></label>
//                   <input className="call form-control" type="text" placeholder="Enter Email" name="email" id="email" onChange={(handleEmail)}/>
//                   </tr>
//                   <tr>
//                   <label htmlFor="psw"><b>Password</b></label>
//                   <input className="call form-control" type="password" placeholder="Enter Password" name="psw" id="psw" onChange={handlePassword}/>
//                   </tr>
//                   </th>
//                     </thead>
//                   </table>
//                   <button style={{background:'#7afcb0'}} className="btn mt-3 my-1 fs-6 w-100 text-bold text-success" onClick={() => notify(handleSubmit)}>Login</button>
//                   <button style={{background:'#91b9f5'}}className="btn text-primary fs-6 mb-3 text-bold  w-100" onClick={() => navigate("/registration")}>Registration</button>
//                  <ToastContainer/>
//                   </form>
                 
//                 </div>
//                </div>
//             </div>
//             {/* <Regestration/> */}
//         </div>
//      </div>
//  )
// }
// export default Login




import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Regestartion from "../pages/Registration.jsx"
import { ToastContainer, toast } from "react-toastify";
import "../assets/css/login.css"
//for navigate Link Route 

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
     // toast message
    const notify = () => {
        toast("");
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
        
   // Handle Submit is login
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
        navigate("/room")

        // if(password !== Regestartion.ConfirmPassword) {
        //     toast.error("Passwords don't match");
        // } else {
        //   // make API call
        // }
        
    };

    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h6 style={{background:'#f79d9d'}} className='text-danger text-center py-2 px-3 rounded fw-bold'>Please enter all the fields</h6>
            </div>
        );
    };

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h6 style={{background:'#5fff8f'}} className='text-success text-center py-2 px-3 rounded fw-bold'>Login successfully!!</h6>
            </div>
        );
    };

    const myStyle = {
        width: "25rem",
        height: "4rem",
        body: "center",
        // fontFamily: 'text new roman'
    }

    const myFont = {
     fontFamily: 'serif'
    }

    return (
        <>
            <div className="container-fluid">
                <div className="col-md-8 col-sm-12">
                    {/* 1 of 8 */}
                </div>

                <div className="col-md-4 col-sm-12 mx-auto w-50 px-5">
                    <div className="col-md-11 col-sm-12 px-4">
                        <div className="col">
                            <div className="messages">
                                {errorMessage()}
                                {successMessage()}
                            </div>
                            <h6 className="text-center">
                            <img className="img text-center" src={require("../assets/images/user.png")} alt=""/>
                            </h6> 
                            <h6 style={{background:'#b078fa'}} className="fs-3 w-75 fw-bold text-light text-center py-2 rounded shadow">Login Page</h6>
                            <form className="form-control w-75 px-4 shadow" style={{background:'#cfe7f5'}}>

                                <table className="ms-4">
                                            <tr>
                                                <label style={myFont} className="fs-3" htmlFor="user">User Email</label>
                                                <input
                                                    style={myStyle}
                                                    className="input form-control"
                                                    type="email"
                                                    value={email}
                                                    name="email"
                                                    placeholder="Enter User..."
                                                    onChange={handleEmail} />
                                            </tr>
                                            <tr>
                                                <label style={myFont} className="fs-3 mt-2" htmlFor="email">User Passowrd</label>
                                                <input
                                                    style={myStyle}
                                                    className="input form-control"
                                                    type="password"
                                                    name="pwd"
                                                    value={password}
                                                    placeholder="Enter password..."
                                                    onChange={handlePassword} />
                                            </tr>
                                            <tr>
                                                <button style={{background:'#7afcb0'}} className="btn mt-3 my-1 fs-6 text-bold text-success" onClick={handleSubmit}>Login</button>
                                                <button style={{background:"#7afcb0"}} className="btn my-1 fs-6" onClick={() => notify("Password don't match")}></button>
                                                <button style={{background:'#91b9f5'}}className="btn text-primary fs-6 mb-3 text-bold " onClick={() => navigate("/registration")}>Registration</button>
                                                <ToastContainer/>
                                            </tr>
                                    
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

