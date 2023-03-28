import React, { useEffect, useRef, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Popup from 'reactjs-popup';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import ReagestrationPage from "./ChatFolder/Registration";
import User from "./ChatFolder/User"

const TableRows = ({ rows, tableRowRemove, onValUpdate, tableRowSubmit }) => {

  return rows?.map((rowsData, index) => {
    const { id, name, profile } = rowsData;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={id}
            onChange={(event) => onValUpdate(index, event)}
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
        <button className="btn text-white" style={{background:'#fcd2d2'}} onClick={() => tableRowRemove(index)}>
          Remove
        </button>
        <td>
      <div className="" onClick={() => tableRowSubmit(index)} />
        </td>
      </tr>

    )
  })
}



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
  const paragraphEl = useRef(null)

  const handleInput = (e) => {
    e.preventDefault()
    setText(e.target.value);
  };


  const onCreateTable = () => {
    alert(
      <User/>
    )
  }
  const [datavalues, setDataValues] = useState();

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

const tableRowSubmit = (index) => {
  const dataRow = [...rows];
  dataRow.slice(index, 1)
  initRows(dataRow)

  setDataValues(dataRow);
  console.log(dataRow);
}

  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
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

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  const myStyle = {
    fontFamily: 'Text New Roman',
    background: '#fffsdff',
    placeholder:'light',
  }

  return (
   <div className="">
     <div className="chat-window">
      <div className="chat-header justify-content-between">
        <p className="text-start d-fixed">Live Chat</p>
        <div>

          <input
            style={myStyle}
            className="placeholdernew text-light bg-transparent"
            type="text"
            placeholder="Search... "
            value={text}
            onChange={handleInput}
          />
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
          <div style={myStyle} className="btn-light rounded-1 mx-auto" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Left popover">

            {/* <div type="button" className="btn btncli" data-bs-toggle="modal-sm" data-bs-target="#exampleModal">New Member */}
            {/* <button type="button" className="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Right popover">
                
            </button>   */}

<div type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">New Member</div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div className="modal-body">
        <form>
          <div className="mx-auto"><h6 className="btn btncl">Started Message</h6>
              <div className="w-50 mx-auto">
                <h5 className="text-center">Group Memeber</h5>
                <table>
                  <thead className="col d-flex mx-2">
                    <tr className="col d-flex">
                      <th className="col">Id</th>
                      <th className="col">Name</th>
                      <th className="col">Profile</th>
                    </tr>
                    <tr>
                      <th className="me-5 ">
                        <button className="btn btn-secondary mx-2  h-75 w-100" onClick={addRowTable}>Insert </button>
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
                        tableRowSubmit={tableRowSubmit}
                      />
                    </tbody>
                    <tr className="text-end">
                      <button style={{background:'#c8f3d8'}} className="btn text-center w-100" onClick={() => tableRowSubmit(rows)}> Save </button>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
        
            {/* <User/> */}


            <div className="w-75"><h6 onClick={onCreateTable} className="btn btncl">Linked Device</h6>
           
              <div className="table-responsive">
                <table className="table table-bordered table-hover" style={{  }}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Profile</th>
                    </tr>
                  </thead>
                  <tbody onClick={() => tableRowSubmit(rows)}>
                    {
                      datavalues?.map(( rows) => (
                        // console.log(rows);
                        <tr ng-repeat="item in contacts">
                          <td>{rows.id}</td>
                          <td>{rows.name}</td>
                          <td>{rows.profile}</td>
                        </tr>
                      ))
                    }
                   
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mx-auto"><h6 className="btn btncl">Started Message</h6>
              <div className="w-50 mx-auto">
                <h5 className="text-center">Group Memeber</h5>
                <table>
                  <thead className="col d-flex mx-2">
                    <tr className="col d-flex">
                      <th className="col">Id</th>
                      <th className="col">Name</th>
                      <th className="col">Profile</th>
                    </tr>
                    <tr>
                      <th className="me-5 ">
                        <button className="btn btn-secondary mx-2  h-75 w-100" onClick={addRowTable}>Insert </button>
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
                        tableRowSubmit={tableRowSubmit}
                      />
                    </tbody>
                    <tr className="text-end">
                      <button style={{background:'#c8f3d8'}} className="btn text-center w-100" onClick={() => tableRowSubmit(rows)}> Save </button>
                    </tr>
                  </tbody>
                </table>
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
   </div>
  );
}

export default Chat;
