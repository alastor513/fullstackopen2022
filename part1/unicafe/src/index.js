import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Statistic = ({ text,value }) =>{ 
  return(
  <tr>
  <td>{text}</td>
  <td>{value}</td>
  </tr>
  )
}
const Statistics = ({ good,neutral,bad,all,average,positive }) =>{
if (all ===0){
return(
  <p>no feedback given</p>
  )
}
return (
  <table>
  <Statistic text='Good' value={good} />
  <Statistic text='Neutral' value={neutral} />
  <Statistic text='Bad' value={bad} />
  <Statistic text='All' value={all} />
  <Statistic text='Averange' value={average} />
  <Statistic text='Positive' value={positive} />
  </table>
)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll] = useState(0)
  const [average,setAverage]= useState(0)
  const [positive,setPositive]= useState(0)
  const Average = function() { 
    return(good + bad)/2
  }
  const Positive = function() { 
    return(good / all)*100
  }
const handleGoodClick = ()=>{
  setGood(good + 1 )
  setAll(all+1)
  setAverage(Average())
  setPositive(Positive())
}
const handleNeutralClick = ()=>{
  setNeutral(neutral + 1 )
  setAll(all+1)
  setAverage(Average())
  setPositive(Positive())
}
const handleBadClick = ()=>{
  setBad(bad + 1 )
  setAll(all+1)
  setAverage(Average())
  setPositive(Positive())
}
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text='good' />
  
      <Button onClick={handleNeutralClick} text='neutral' />
      
      <Button onClick={handleBadClick} text='bad' />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average= {average} positive= {positive}/>
    </div>
    

  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)