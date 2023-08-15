
import React from "react";
import {useState} from 'react'
import './../styles/App.css';
import ShowModal from './ShowModal'

const App = () => {
  let [state,Setstate]= useState(false)
  function onClose(){
    Setstate(false)
  }
  window.addEventListener('click',(event)=>{
    let btn=document.getElementById('startbtn')
    if(event.target.className =='model-overlay' || event.target.className=='model-close' || event.target.className=='model p'){
      console.log(event)
      Setstate(false)
    }
  })
  return (
    <div>
        <button onClick={()=>{Setstate(true)}} id='startbtn'>Show Modal</button>
         <ShowModal oncall={onClose} state={state} />
    </div>
  )
}

export default App
