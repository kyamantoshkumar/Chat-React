import React, { useState } from "react"

const User = () => {

    // const [id, setId] = useState()
    // const [name, setName] = useState()  
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState() 

    const [tableData, setTableData] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
    })
    const onClickTable = () => {
        console.log(tableData)
    }
    return (
        <>
            <div className="conatiner">
                <div className="col-md-10">
                    <div className="row">
                        <div>
                            <table>
                                <thead className="text-start">
                                    <tr>
                                        <label>Id</label><br/>
                                        <input type="text"
                                            value={tableData.id}
                                            placeholder="Enter id..."
                                            onChange={(e) => setTableData({
                                                id: e.target.value,
                                                name: tableData.name,
                                                email: tableData.email,
                                                password: tableData.password
                                            })}
                                            className="User Form"
                                        />
                                    </tr>
                                    <tr>
                                        <label>Name</label>
                                        <input type="text"
                                            value={tableData.name}
                                            placeholder="Enter Name..."
                                            onChange={(e) => setTableData({
                                                name: e.target.value,
                                                id: tableData.id,
                                                // name:tableData.name,
                                                email: tableData.email,
                                                password: tableData.password
                                            })}
                                            className="User Form"
                                        />
                                    </tr>
                                    <tr>
                                        <label>Email</label>
                                        <input type="email"
                                            value={tableData.email}
                                            placeholder="Enter Email..."
                                            onChange={(e) => setTableData({
                                                email: e.target.value,
                                                id: tableData.id,
                                                name: tableData.name,
                                                password: tableData.password
                                            })}
                                            className="User Form"
                                        />
                                    </tr>
                                    <tr>
                                        <label>Password</label>
                                        <input type="password"
                                            value={tableData.password}
                                            placeholder="Enter Password..."
                                            onChange={(e) => setTableData({

                                                id: tableData.id,
                                                name: tableData.name,
                                                email: tableData.email,
                                                password: e.target.value,
                                                // password:tableData.password
                                            })}
                                            className="User Form"
                                        />
                                    </tr>
                                    <thead>
                                        <button className="btn btn-secondary w-100" onClick={onClickTable}>save</button>
                                    </thead>
                                </thead>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default User
