import React, { useRef } from "react";

const Mantosh = () => {
 const togglerRef = useRef(null);

 const buttonClickHandler = () => {
  alert("button clicked");
 };

 togglerRef.current.click();

 return (
  <div className="App">
   <button ref={togglerRef} onClick={buttonClickHandler}>
    toggle button
   </button>
  </div>
 );
};

export default Mantosh;