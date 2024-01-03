import { useState , useEffect} from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
   console.log("current value of count in useEffect",count)

},[count])

  const addValue= ()=>{
    if(count===20) return
    setCount(count + 1)
    console.log('current value of count:',count)
  }
  const subtractValue=()=>{
    if(count === 0) return
    setCount(count -1)
    console.log('current value of count:',count)
  }

  return (
    <>
     <h1>useState hook</h1>
     <h3>counter value : {count}</h3>
      <button onClick={addValue}>add value</button>
      <br/><br/>
      <button onClick={subtractValue}>decrees value</button>
    </>
  )
}

export default App
