
import React from "react";
import {useState} from 'react'
import './../styles/App.css';
import Modal from './Modal'

const App = () => {
  let [state,Setstate]= useState(false)
  function onClose(){
    Setstate(false)
  }
  window.addEventListener('click',(event)=>{
    let btn=document.getElementById('startbtn')
    if(event.target!=btn && (event.target.className!='model-overlay'&& event.target.className!='model-close'&& event.target.className!='model p')){
      console.log(event)
      Setstate(false)
    }
  })
  return (
    <div>
        <button onClick={()=>{Setstate(true)}} id='startbtn'>Show Modal</button>
        {state && <Modal oncall={onClose} />}
    </div>
  )
}

export default App
