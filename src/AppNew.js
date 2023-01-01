

import React from "react"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js.map"
import LoginPage from "./ChatFolder/L1ogin"

const AppNew = () => {
    return (
        <>
        <div className="container">
            <div className="col-md-12 col-sm-12">
                <div className="row">
                    <div>
                        <BrowserRouter>
                         <Routes>
                            <Route path="" element={<LoginPage/>}></Route>
                         </Routes>
                        </BrowserRouter>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default AppNew