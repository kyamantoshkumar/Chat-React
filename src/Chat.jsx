import React, { useEffect, useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Popup from 'reactjs-popup';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const TableRows = ({ rows, tableRowRemove, onValUpdate, tableFormSubmit, onFormSubmit }) => { 
  return rows?.map((rowsData, index ) => { 
     const { id, name, profile } = rowsData;
     return (
      <tr key={index}>
        <td>
          <input 
           type="text"
           value={id}
           onChange={(event) => onValUpdate(index,event)}
           name="id"
           className="form-control"
           />
        </td>
        <td>
          <input  
           type="text"
           value={name}
           onChange={(event) => onValUpdate(index, event)}
           name="name"
           className="form-control"
          />
        </td>
        <td>
          <input 
           type='text'
           value={profile}
           onChange={(event) => onValUpdate(index, event)}
           name="profile"
           className="form-control"
          />
        </td>
        <button className="btn btn-danger" onClick={() => tableRowRemove(index)}>
          Delete Row
        </button>
        {/* <div className="d-grid">
        <button
          type="submit"
          onClick={() => tableFormSubmit(data)}
          className="btn btn-success"
        >submit</button>
      </div> */}
      </tr>
     )
  })
}


// const data = ({value, onValUpdate  }) => {
//    return value.map((rowsData, index ) => {
//     const { data } = rowsData
//     return (
      
//       <tr onValUpdate={data}>{onValUpdate.rowsData}</tr>
//     )
//    })
// } 

// const memberData = [
//   {
//     id: 2123,
//     Name: "Subham"
//   },

//   {
//     id:2234,
//     Name:'Saurabh'
//   },

//   {
//     id:1123,
//     Name:'Shreyas'
//   },
// ];

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


  const onCreateTable = () => {
    alert(
      ' Yes! I Linked the Device. This device are "Liked from Frontend to Backend" '
    )
  }
 
  const [rows, initRows] = useState([])
  const addRowTable = () => {
    const data = {
      id: "",
      name: "",
      profile: "",
    };
    initRows([...rows, data])
  }
   const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1)
    initRows(dataRow)
   }

   const onValUpdate = (i, event) => {
    const  {name, value} = event.target;
    const data = [...rows];
    data[i][name] = value;
    initRows(data)
    console.log(data)
  };
 
  const onValChange = (event) => {
    const data = (res) => ({
      ...res,
      [event.target.name]: event.target.value,
    });
    addRowTable(data);
  };
  // const onFormSubmit = (event) => {
  //   event.target.value(data);
  //   const checkVal = !Object.values(rows).every((res) => res === "");
  //   if (checkVal) {
  //     const dataObj = (data) => [...data, rows];
  //      TableRows(dataObj);
  //     const isEmpty = { id: "", name: "", profile: "" };
  //    TableRows(isEmpty);
  //   }
  //   console.log(onFormSubmit);
  // };


  const transferValue = (event) => {
    event.preventDefault();
    const val = {
     data:''
    };
    event.data(val);
    // clearState();
  };
  
  // const clearState = () => {
  //   setName('');
  //   setCity('');
  // };
 
  // const [tableData, setTableData] = useState([]);

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
            style={ myStyle }
            className="placeholder color-light bg-transparent placeholder-white"
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

            <button type="button" className="btn btncli" data-bs-toggle="modal" data-bs-target="#exampleModal">New Member</button> 

            <div className="modal " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            <div><h6 onClick={onCreateTable} className="btn btncl">Linked Device</h6>
            <div className="table-responsive">
  <table className="table table-bordered table-hover" style={{width: '80%'}}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Profile</th>
      </tr>
    </thead>
    <tbody>
      {
        rows.map((rows) => {
<tr ng-repeat="item in contacts">
        <td>{rows.id}</td>
        <td>{rows.name}</td>
        <td>{rows.profile}</td>
      </tr>
        })
      } 
      
    </tbody>
  </table>
 </div>
</div>
            <div><h6 className="btn btncl">Started Message</h6>
                <div>
                  <h5 className="text-center">Group Memeber</h5>
                  <form>
                  <table>
                  <thead className="col d-flex">
                    <tr className="col d-flex bg-info">
                      <th className="col">Id</th>
                      <th className="col">Name</th>
                      <th className="col">Profile</th>
                      </tr>
                      <tr>
                      <th>
                    <button className="btn btn-secondary" onClick={addRowTable}>Insert Row</button>
                    </th>
                    </tr>
                  </thead>
              <tbody>
                <tbody>
                  <TableRows 
                   rows={rows}
                   tableRowRemove={tableRowRemove}
                   onValUpdate={onValUpdate}
                   onValChange={onValChange}
                  />
                </tbody>
                <tr className="text-end">
                <button className="btn btn-warning text-center w-100" onClick={() => transferValue(data)}>Save Data</button>
                </tr>
              </tbody>
                </table>
                  </form>
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

/* 



   
    {/* <button className="search placeholder-light" style={{width:'60px', background:'transparent', border:'none'}}><input  className="placeholder placeholder-white text-light bg-dark" type="search" placeholder="search..." onChange={handleChange}/></button> 
/> */
