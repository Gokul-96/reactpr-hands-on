





// function App() {
// let course="Half stack application development";
// let part1='Fundamentals of React';
// let exercise1= 10;
// let part2 ='Using props to pass data';
// let exercise2=7;
// let part3='State of a acomponent';
// let exercise3=14;
// let part4='No.of Exercise';





// return (
//   <div> 
//   <h1>{course}</h1> 
//   <p>{part1}{exercise1}</p>
//   <p>{part2}{exercise2}</p>
//   <p>{part3}{exercise3}</p>
//   <p>{part4}{exercise1+exercise2+exercise3}</p>


//     </div>
//   );
// }

// export default App;


//Task2
// function Header(props) {

//   return (
//     <div><h1>{props.course}</h1></div>

//   )
// }

// function Content(props) {
//   // console.log(props);
//   return (
//     <div>
//       <p>{props.part1}{props.exercise1}</p>
//       <p> {props.part2}{props.exercise2}</p>
//       <p>{props.part3}{props.exercise3}</p>
//     </div>
//   )
// }

// function Total(props) {
//   return (
//     <div>
//       <p> {props.part4}{props.exercise4}</p>
//     </div>
//   )
// }







// function App() {


//   let course = "Half stack application development";
//   let part1 = 'Fundamentals of React';
//   let exercise1 = 10;
//   let part2 = 'Using props to pass data';
//   let exercise2 = 7;
//   let part3 = 'State of a component';
//   let exercise3 = 14;
//   let part4 = 'No.of Exercise';


//   return (
//     <div>

//       <Header course={course} />


//       <Content part1={part1} exercise1={exercise1}
//         part2={part2} exercise2={exercise2}
//         part3={part3} exercise3={exercise3}
//       />

//       <Total  part4={part4} exercise4={exercise1 + exercise2 + exercise3} />


//     </div>
//   );
// }

// export default App;


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

