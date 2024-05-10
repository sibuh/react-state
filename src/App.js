import React from "react";
import './style.css'
import Form from './Form'
import WindowTracker from "./WindowTracker";

export default function App(){
  // const[squares,setSquares]=React.useState(Data);
  
  // function toggle(id){
  //   setSquares(pevSquares=>{
  //     return pevSquares.map(square=>{
  //       return square.id ===id? {...square,on:!square.on}:square
  //     })
  //   })
  // }
  // const sqrs=squares.map(sqr=>{
  //  return <Box 
  //  id = {sqr.id}
  //  on = {sqr.on}
  //  key = {sqr.id}
  //  toggle = {toggle}
  //  />
  // })

  return(
    <main className="main">
       {/* {sqrs} */}
       <Form />
       <WindowTracker />
    </main>
     
   )
}
