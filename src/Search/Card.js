import React from "react"

const Card = ({person}) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={require("..")} alt="" />
          <div>
            <h2>{person.name}</h2>
            <p>{person.email}</p>
          </div>
        </div>
    )
}
export default Card

/*
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
 
const App = () => {
 
  const [myOptions, setMyOptions] = useState([])
 
  const getDataFromAPI = () => {
    console.log("Options Fetched from API")
 
    fetch('http://dummy.restapiexample.com/api/v1/employees').then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res.data)
      for (var i = 0; i < res.data.length; i++) {
        myOptions.push(res.data[i].employee_name)
      }
      setMyOptions(myOptions)
    })
  }
 
  return (
    <div style={{ marginLeft: '40%', marginTop: '60px' }}>
      <h3>Greetings from GeeksforGeeks!</h3>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
          />
        )}
      />
    </div>
  );
}
 
export default App
*/