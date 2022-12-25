
import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
            //   <a className="dataItem" href={value.link} target="_blank" >
                <p>{value.title} </p>
            //   </a>
            );
          })}
        </div>

       )}
    </div>
  );
}

export default SearchBar;





  /*
          <button className="search"> <input type="search" placeholder="search..." value={q} onChange={(e) => setQ(e.target.value)}/></button>

   const [profileData, setProfileData] = useState([
         {
            name:"Brain Kernighan",
            email:"brain@test.com",
            password: "password1",
            skills: ["AWK","AMPL","Unix"]
         },
         {
            name:'Mantosh',
            email:"kyamantosh@gmail.com",
            password:'password1',
            skill:['React.js',"JavaScript","Express"]
         },
         {
          name:'Yugesh',
          email:'yugeshanand@gmail.com',
          password:'password1',
          skill: ["React.js", "Next.js", "Express.js", "JavaScript"]
         }
      ])
      const [q, setQ ] = useState("");
      const[searchTerm] = React.useState(["email","name"])
    function Search(items) { 
      return items.filter((item) => { 
        return searchTerm.some((newItem) => {
            return (
              item[newItem]
                  .toString()
                  .toLowerCase()
                  .indexOf(q.toLowerCase()) > -1
            );
        })
      })
    }
  
  
  {messageContent.image.selectedFile &&
                    username === messageContent.author ? <img style={{
                      objectFit: 'contain',
                      width: 100,
                      height: 100,
                      borderRadius:5
                    }} src={`${URL.createObjectURL(messageContent.image.selectedFile)}`} alt="" /> : 
                    <img style={{
                      objectFit: 'contain',
                      width: 100,
                      height: 100,
                      borderRadius:5
                    }} src={`data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(messageContent.image.selectedFile)))}`} alt="" /> 
                     <button>&#8285;</button> 
         <button> &#128206;</button>
                    
          {/* <button>&#8377;</button> */
      /* <button className="mt-3"><i className="fad fa-circle-camera"></i></button>


         <button>&#8285;</button>  // 3 dot icon
                    */
                  