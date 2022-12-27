import React, { useEffect, useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Popup from 'reactjs-popup';



// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
// import Home from "./Components/Home";
// import "./assets/css/chat.css"
const memberData = [
  {
    id: 2123,
    Name: "Subham"
  },
  {
    id:2234,
    Name:'Saurabh'
  },
  {
    id:1123,
    Name:'Shreyas'
  },
];

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

 
  const Author = () => {
      const [author, setAuthor] = useState("")
  }

  const [createTable, setCreateTable] = useState("");
  const onCreateTable = () => {
    alert(
    " Hello World"
    )
    setCreateTable(!createTable);
  }


  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  const myStyle = {
    fontFamily: 'Text New Roman',
    background:'#d1e9f5'
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
          {/* <i className="fa-solid fa-magnifying-glass"></i> */}
          <p className="text-black bg-primary" ref=
            {paragraphEl}
          >
          </p>


        </div>

        <Popup

          trigger={<button className="ellipsis" style={{ background: 'transparent', border: 'none' }}><i className="ellipsis fa-solid fa-ellipsis-vertical"></i>
          </button>}
          position="left top" className="bg-primary"
        >
          <div style={myStyle} className="btn-light text-start rounded-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">

            <h6 className="btn btncli" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">New Member</h6>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New Member</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label">Id:</label>
                        <input type="text" className="form-control" id="recipient-id" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="message-text" className="col-form-label">Author:</label>
                        <input type="text" className="form-control" id="recipient-author" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close Group</button>
                    <button type="button" className="btn btn-primary">Add Member</button>
                  </div>
                </div>
              </div>
            </div>
            <div><h6 onClick={onCreateTable} className="btn btncl">Linked Device</h6></div>
            <div><h6 className="btn btncl">Started Message</h6>
               <div>
                <table>
                   <thead>
                    <th scope="col">Sl No</th>
                    <th scope="col">Id</th>
                    <th scope="col">Author</th>
                   </thead>
                </table>
                <tbody>
                  {memberData.map((author) => {
                   <tr>
                      <th scope="row">{author.id}</th>
                      <th scope="row">{author.Name}</th>
                   </tr>
                  })}
                </tbody>
               </div>
            </div>
            <div><h6 className="btn btncl">Setting</h6></div>
          </div>
        </Popup>
      </div>

      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => {
            return (
              <div
                key={index}

                className={text ? (messageContent.message.includes(text) ? "message" : "d-none") : "message"}
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

                    {messageContent.message.messageList}

                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}
                    </p>
                  </div>
                </div>
              </div>


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
