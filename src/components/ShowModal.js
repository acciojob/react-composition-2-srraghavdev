// import React from "react";
// let Modal= (props)=>{
//     return (props.state ? (<div className="model-overlay">
//                 <button className="model-close" onClick={props.oncall}>Close</button>
//                 <p className="model p">This is the content of the modal</p>
//             </div>)  : <></>
//     ) 
// }

// export default Modal
import React from "react";
import ModalContainer from "./ModalContainer";
import { useState } from "react";

const ShowModal=()=>{
    let [open,setOpen]=useState(false)
    
    
    return(
        <div className="show-modal">
            <button onClick={()=>setOpen(true)}>Show Modal</button>
            {open && (
        <ModalContainer handleClick={() => setOpen(false)}>
          <div className="model"><p>This is the content of the modal.</p></div>
        </ModalContainer>
      )}
        </div>
    )
}

export default ShowModal