import React, { useEffect, useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Popup from 'reactjs-popup';


// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
// import Home from "./Components/Home";
// import "./assets/css/chat.css"

function Chat({ socket, username, room, data, placeholder }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [image, setImage] = useState("");
  const onFileChange = event => {
    setImage({ selectedFile: event.target.files[0] });
  };

  const sendMessage = async () => {
    if (currentMessage !== " " || image !== 0) {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        image: image,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
      setImage({ selectedFile: "" })
    }
  };

  const [text, setText] = useState("");
  // const [isFound, setFound] = useState(false);
  const paragraphEl = useRef(null)

  const handleInput = (e) => {
    e.preventDefault()
    setText(e.target.value);
   
   
  };




  // const [filteredData, setFilteredData] = useState([]);
  // const [wordEntered, setWordEntered] = useState("");
  // const handleFilter = (event) => {
  //   const searchWord = event.target.value;
  //   console.log(searchWord);
  //   setWordEntered(event.target.value);
  //   event.preventDefault()
  //   setWordEntered(searchWord);

  //   const newFilter = data.filter((value) => {
  //     return value.title.toLowerCase().includes(searchWord.toLowerCase());
  //   });

  //   if (searchWord === "") { //searchWord
  //     setFilteredData([]);
  //   } else {
  //     setFilteredData(newFilter);
  //   }
  //   };

  //   const clearInput = () => {
  //   setFilteredData([]);
  //   setWordEntered("");
  // };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
    console.log();
  }, [socket]);

  const myStyle = {
    fontFamily: 'Text New Roman'
  }

  return (

    <div className="chat-window">
      <div className="chat-header justify-content-between">
        <p className="text-start d-fixed">Live Chat</p>
        <div>

          <input
            style={{ myStyle, placeholder: 'white' }}
            className="placeholder placeholder-white"
            type="text"
            placeholder="Search... "
            value={text}
            onChange={handleInput}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
          <p className="text-black bg-primary" ref=
            {paragraphEl}
          >
          </p>
          {/* {isFound && <p className="w-100 fs-1 text-black" style={{ color: "green", marginTop: '15rem', background: 'blue', marginLeft: '35%' }} >We Found It</p>} */}
         
        </div>

        {/* 
        <div className="search">
      <div className="searchInputs">

      <input
          className="paceholder text-light bg-transparent"
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
              <a className="dataItem" href={value.link} target="_blank" >
                <p>{value.title} </p>
              </a>
            );
          })}

        </div>
      )}
    </div> 
        */}

        <Popup
          trigger={<button className="ellipsis" style={{ background: 'transparent', border: 'none' }}><i className="ellipsis fa-solid fa-ellipsis-vertical"></i>
          </button>}
          position="left top" className="bg-primary"
        >
          <button style={myStyle} type="button" className="text-start btn btn-light" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">
            <h6>New Group</h6>
            <h6 >Linked Device</h6>
            <h6>Started Message</h6>
            <h6>Setting</h6>
          </button>
        </Popup>
      </div>

      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => {
            return (
             text ? (
              messageContent.message === text &&
             <div
              key={index}
              className="message"
              id={username === messageContent.author ? "you" : "other"}
            >
              <div>
                <div className="message-content" style=
                  {{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0.2rem"
                  }}>
                  <p>{messageContent.message}
                  </p>
                  {messageContent.image.selectedFile &&
                    <img style={{
                      objectFit: 'contain',
                      width: 100,
                      height: 100,
                      borderRadius: 5
                    }} src={username === messageContent.author ?
                      `${URL.createObjectURL(messageContent.image.selectedFile)}` : `data:image/png;base64,${btoa(String.fromCharCode(...new
                        Uint8Array(messageContent.image.selectedFile)))}`} alt="" />}
                  {messageContent.message.messageList

                  }
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}
                  </p>
                </div>
              </div>
            </div>
            ):(
            <div
              key={index}
              className="message"
              id={username === messageContent.author ? "you" : "other"}
            >
              <div>
                <div className="message-content" style=
                  {{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0.2rem"
                  }}>
                  <p>{messageContent.message}
                  </p>
                  {messageContent.image.selectedFile &&
                    <img style={{
                      objectFit: 'contain',
                      width: 100,
                      height: 100,
                      borderRadius: 5
                    }} src={username === messageContent.author ?
                      `${URL.createObjectURL(messageContent.image.selectedFile)}` : `data:image/png;base64,${btoa(String.fromCharCode(...new
                        Uint8Array(messageContent.image.selectedFile)))}`} alt="" />}
                  {messageContent.message.messageList

                  }
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}
                  </p>
                </div>
              </div>
            </div>)
              
            );
          })}
        </ScrollToBottom>
      </div>

      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Message..."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
            // event.key === "Enter" && currentMessage(); 
          }}
        />
        <input type="file" id="file" style={{ display: 'none' }} onChange={onFileChange} />
        <label className="text-muted" htmlFor="file"><i className="icon fa-solid fa-paperclip"></i></label>
        <button onClick={sendMessage}>&#10148;</button>
      </div>
    </div>
  );
}

export default Chat;



/*
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


// import TextField from '@material-ui/core/TextField';
// import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

//    const filterOptions = createFilterOptions ({
//       matchFrom:'start',
//       stringify: currentMessage => currentMessage
//    });
//    const myCurrentMessage = [messageList]

//   const filterOptions = createFilterOptions({
//     matchFrom: 'start',
//     stringify: option => option,
//   });
//   const myOptions = ['One Number','Hello', 'Two Number', 'Five Number',
// 'This is a sample text', 'Dummy text', 'Dropdown option teet',
// 'Hello text', 'Welcome to text field'];

import React, { useState, useRef } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [isFound, setFound] = useState(false);
  const paragraphEl = useRef(null);

  const handleInput = (e) => {
    setText(e.target.value);
    const paragraphText = paragraphEl.current.textContent;
    if (e.target.value !== "" && paragraphText.includes(e.target.value)) {
      setFound(true);
    } else {
      setFound(false);
    }
  };

  return (
    <div>
      // <h1>Search text</h1>
      <input
        type="text"
        placeholder="Type here"
        value={text}
        onChange={handleInput}
      />
      <p ref={paragraphEl}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {isFound && <p style={{ color: "green" }}>We found it</p>}
    </div>
  );
}
     3
*/

/* <Autocomplete
className="text-light"
freeSolo
filterOptions={filterOptions}
options={myOptions}
renderInput={(params) => (
<TextField 
style={{border:'none'}}
  className="placeholder placeholder-light text-light"
  {...params}
  variant="outlined"
  label ="Search..."
/>
// <button className="search placeholder-light" style={{width:'60px', background:'transparent', border:'none'}}><input  className="placeholder placeholder-white text-light bg-dark" type="search" placeholder="search..." 
//  variant="outlined" {...params} /></button>
)}

   
    {/* <button className="search placeholder-light" style={{width:'60px', background:'transparent', border:'none'}}><input  className="placeholder placeholder-white text-light bg-dark" type="search" placeholder="search..." onChange={handleChange}/></button> 
/> */
