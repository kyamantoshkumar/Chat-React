

// import { fontFamily, style } from "@mui/system"
import React, { useState } from "react"

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // const  onClickUser = () => {
    //     setEmail(email);
    //     setPassword(password);
    //    console.log(password,email,);
    //    alert(email, password,)
    // } 

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h6 className='bg-danger text-light py-2 px-3 rounded fw-bold'>Please enter all the fields</h6>
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
                <h6 className='bg-success text-light py-2 px-3 rounded fw-bold'>Login successfully!!</h6>
            </div>
        );
    };

    const myStyle = {
        width: "20rem",
        height: "4rem",
        body: "center",
        fontFamily: 'text new roman'

    }
    return (
        <>
            <div className="conatiner bg-secondary ">
                <div className="col-md-8 col-sm-12">
                    1 of 8
                </div>
                <div className="col-md-4 col-sm-12 mx-5">
                    <div className="col-md-12 col-sm-12 px-4">
                        <div className="row">

                            <div className="messages">
                                {errorMessage()}
                                {successMessage()}
                            </div>
                            <form>
                                <div>
                                    <table>
                                        <thead>
                                            <th>
                                                <h6 className="fs-3 bg-white fw-bold ff-timeeNewRoman text-black text-center py-2 rounded">Login Page</h6>
                                                <tr>
                                                    <label className="fs-3" htmlFor="user">User Email</label>
                                                    <input
                                                        style={myStyle}
                                                        className="form-control"
                                                        type="email"
                                                        value={email}
                                                        placeholder="Enter User..."
                                                        onChange={handleEmail} />
                                                </tr>
                                                <tr>
                                                    <label className="fs-3" htmlFor="email">User Passowrd</label>
                                                    <input
                                                        style={myStyle}
                                                        className="form-control"
                                                        type="password"
                                                        value={password}
                                                        placeholder="Enter password..."
                                                        onChange={handlePassword} />
                                                    {/* <input type="text" name="passw" id="passw" value={email} onChange={(e)=>setEmail(e.target.value)}/>  */}
                                                </tr>
                                                <tr>
                                                    <button className="btn btn-success my-3 mw-100" onClick={handleSubmit}>Login</button>

                                                </tr>
                                            </th>
                                        </thead>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage


/*
 <Box>
   <Grid xs={4} md={12} > 
     <Item> </item>
   </Grid>
 </Box>

*/

/*
import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js.map"

const LoginPage = () => {

    const[email,setEmail]=useState(""); 
    const[password,setPassword]=useState("");
      
   const onSubmit = () => {
       console.log(email, password)
   }
    return(
        <div>
        <form action=""> 
            <div> 
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
            </div> 
            <div> 
                <label htmlFor="passw">Password</label>
                <input type="text" name="passw" id="passw" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
            </div>  
            <button type="submit" onClick={onSubmit}>Login</button>
        </form>
      </div>
    )
}
export default LoginPage
*/
