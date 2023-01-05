import React,{useState, } from 'react'
import io from "socket.io-client";
import Chat from '../Chat';
const socket = io.connect("http://localhost:4000");
const Room = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className=''>  {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
           className='w-100'
            type="input"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />

          <input
          className='w-100'
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button className='w-100' onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}</div>
  )
}

export default Room