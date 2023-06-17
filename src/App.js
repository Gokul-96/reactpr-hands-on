//Task4

// The useState hook is imported from the 'react' library along with the React module.
// Inside the MyComponent function, the useState hook is used to declare a state variable called count with an initial value of 0.
// The useState hook returns an array with two elements: the current state value (count) and a function to update the state (setCount).
// The handleClick function is an event handler for a button click, and it updates the count state by calling the setCount function and passing the new value (count + 1).
// The current state value (count) is displayed in the UI using curly braces {}.
// When the button is clicked, the handleClick function is called, which triggers the state update and causes the component to re-render.
// By using the useState hook, you can manage and update state in functional components in React.


import { useState } from 'react'
     
function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);




  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>


      <div>
        <h1>statics</h1>
        <p>good{good}</p>
        <p>neutral{neutral}</p>
        <p>bad{bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average{(good + neutral + bad)/3}</p>
        <p>positivity{(good/(good + neutral + bad))*100}%</p>

      </div>
    </div>
  )
}

export default App



