
import React from "react";
import {useState} from 'react'
import './../styles/App.css';
import Modal from './Modal'
const App = () => {
  let [state,Setstate]= useState(false)
  function onClose(){
    Setstate(false)
  }
  return (
    <div>
        <button onClick={()=>{Setstate(true)}}>Show Modal</button>
        {state && <Modal oncall={onClose} />}
    </div>
  )
}

export default App
