import { useState,useEffect } from "react"

function App() {
  const [count, setCount] = useState(0)
  const [isEven,setIsEven] = useState(true)
  useEffect(()=>{
    if(count%2===0){
      setIsEven(true)
    } else {
      setIsEven(false)
    }
  },[count])

  return (
    <>
     <h1>The count ({count}) is an {isEven?"even":"odd"} number!</h1>
     <button onClick={()=>setCount(count+(Math.floor(Math.random()*10)))}>increment count</button>
    </>
  )
}

export default App
