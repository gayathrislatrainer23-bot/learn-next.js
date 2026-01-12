"use client"
import { useState } from "react";

const Counter = ()=>{
// const counter = 0
// const [state,setState]= useState()
const [counter,setCounter] =useState(0)
const increment = ()=>{
    // if(counter < 10){
    //     setCounter(counter+1)
    // }else{
    //     alert("counter cannot go above 10")
    // }
       setCounter(counter+1)
    
}

const decrement = ()=>{
//    if(counter>0){
//          setCounter(counter-1)
//    }else{
//     alert("Counter Cannot be negative")
//    }
 setCounter(counter-1)
}
const reset =()=>{
    setCounter(0)
} 
    return(
        <div>
          
            <button onClick={()=>increment()}>+</button>
            <h1>counter: {counter} </h1>
            <button onClick={()=>decrement()}>-</button>
            <button onClick={()=>reset()}>Reset</button>
        </div>
    )
}
export default Counter;