import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({ counter }) => <div>{counter}</div>

const App = () => {
  const [ counter, setCounter ] = useState(0)
 
  const increaseByOne = () => setCounter(counter + 1)
 
  const decreaseByOne = () =>{
    if (counter > 0){ 
    setCounter(counter - 1)
    }
  }
    const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))