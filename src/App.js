//Task6
//Use button in one component
//state should in App component only
//statics are in one component
//and staticlines are in one component

import { useState } from 'react'

import React from 'react'




function StaticsLine({text,value}) {
  return (
    <div>
<p>{text}{value}</p>
    </div>
  )
}

function Statics({good,neutral, bad }) {
  return (
    <div>
    <h1>statics</h1>
            <StaticsLine text='good' value ={good} />
            
            <StaticsLine text='neutral' value ={neutral} />
            
            <StaticsLine text='bad' value ={bad} />

            
            <StaticsLine text='all' value ={good + neutral + bad} />
            <StaticsLine text='average' value ={(good + neutral + bad)/3}/>
            <StaticsLine text='positivity' value ={(good/(good + neutral + bad))*100 + '%'}/>
       
    
        </div>
  )
}



function Button({handleClick, text}) {
  return (
    <div>
     <button onClick={handleClick}>{text}</button>

      </div>

    
  )
}



     
function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);




  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={()=> setGood(good+1)} text='good' />
        <Button handleClick={()=> setNeutral(neutral+1)} text='neutral' />
        <Button handleClick={()=> setBad(bad+1)} text='bad' />

      </div>


      <div>
        <Statics good={good} neutral={neutral} bad={bad} />
       

      </div>
    </div>
  )
}

export default App




