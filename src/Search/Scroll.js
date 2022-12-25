import React from "react";

const Scroll = (props) => {
    return(
      <div style={{overFlowY: 'scroll', height:'70vh'}}>
        {props.children}
      </div>
    )
}
export default Scroll