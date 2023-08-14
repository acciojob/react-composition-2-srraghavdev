import React from "react";
let Modal= (props)=>{
    return (props.state ? (<div className="model-overlay">
                <button className="model-close" onClick={props.oncall}>Close</button>
                <p className="model p">This is the content of the modal</p>
            </div>)  : <></>
    ) 
}

export default Modal