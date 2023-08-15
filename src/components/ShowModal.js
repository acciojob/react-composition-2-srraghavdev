import React from "react";
let ShowModal= (props)=>{
    return (props.state ? (<div className="model-overlay">
                <button className="model-close" onClick={props.oncall}>Close</button>
                <div className="model"><p>This is the content of the modal.</p></div>
            </div>)  : <></>
    ) 
}

export default ShowModal
