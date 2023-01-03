import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
//for navigate Link Route 

const Login = () => {
    const navigate = useNavigate()
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
        navigate("/room")
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
            <div className="container">
                <div className="col-md-8 col-sm-12">
                    {/* 1 of 8 */}
                </div>
                <div className="col-md-4 col-sm-12 mx-auto w-50 px-5">
                    <div className="col-md-12 col-sm-12 px-4 mx-3">
                        <div className="row">
                            <div className="messages">
                                {errorMessage()}
                                {successMessage()}
                            </div>
                            <h6 style={{background:'#b078fa'}} className="fs-3 fw-bold text-light text-center py-2 rounded shadow">Login Page</h6>
                            <form className="form-control w-100 px-4 shadow" style={{background:'#cfe7f5'}}>

                                <table className="ms-4">
                                    <thead>
                                        <th>
                                            <tr>
                                                <label style={myFont} className="fs-3" htmlFor="user">User Email</label>
                                                <input
                                                    style={myStyle}
                                                    className="input form-control"
                                                    type="email"
                                                    value={email}
                                                    placeholder="Enter User..."
                                                    onChange={handleEmail} />
                                            </tr>
                                            <tr>
                                                <label style={myFont} className="fs-3 mt-2" htmlFor="email">User Passowrd</label>
                                                <input
                                                    style={myStyle}
                                                    className="input form-control"
                                                    type="password"
                                                    value={password}
                                                    placeholder="Enter password..."
                                                    onChange={handlePassword} />
                                                {/* <input type="text" name="passw" id="passw" value={email} onChange={(e)=>setEmail(e.target.value)}/>  */}
                                            </tr>
                                            <tr>
                                                <button style={{background:'#7afcb0'}} className="btn mt-3 my-1 fs-6 w-100 text-bold text-success" onClick={handleSubmit}>Login</button>
                                                <button style={{background:'#91b9f5'}}className="btn text-primary fs-6 mb-3 text-bold  w-100" onClick={() => navigate("/registration")}>Registration</button>
                                            </tr>
                                        </th>
                                    </thead>
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
