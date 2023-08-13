import React,{useState} from "react";
let Modal= (props)=>{
    return(
        <div className="model-overlay">
            <button className="model-close" onClick={props.oncall}>Close</button>
            <p>This is the content of the modal</p>
        </div>
    )
}

export default Modal