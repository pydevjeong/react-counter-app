import { useState } from "react";
import { useSelector,useDispatch } from "react-redux"
import { counterActions } from "../store/index";
import classes from './Counter.module.css'


const Counter=()=>{
  
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter.counter)
  const show=useSelector(state=>state.counter.showCounter)
  const [userInput,setUsetInput]=useState('')

  const increment=()=>{
    dispatch(counterActions.increment())
  }
  const decrement=()=>{
    dispatch(counterActions.decrement())
  }
  const recordValue=(e)=>{
    setUsetInput(e.target.value)
  }
  const increseValue=()=>{
    const value=parseInt(userInput)
    dispatch(counterActions.increseValue(value))
  }

  const openCounter=()=>{
    dispatch(counterActions.openCounter())
  }
  return(
    <main className={classes.counter}>
      <h1>Counter App</h1>
      {show && <div className={classes.value}> {counter} </div>}
       <div>
        <button onClick={increment}>+1 increse</button>
        <button onClick={decrement}>-1 decrese</button>
        <p>Input value makes your counter value +</p>
        <input type="text" onChange={recordValue}/>
        <button onClick={increseValue}>increse value</button>
        <button onClick={openCounter}>open/close</button>
      </div> 
    </main>
  )
}

export default Counter