import React from "react";

const ModalContainer=({handleClick,children})=>{

    window.addEventListener("click",function(event){
        if(event.target.classList.contains("model-overlay")){
            handleClick(false)
        }
    })
    return(
        <div className="model-overlay">
            <button className="model-close" onClick={()=>handleClick(false)}>Close</button>
            {children}
        </div>
    )
}

export default ModalContainer