





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


//Task3
function Header(props) {

  return (
    <div><h1>{props.course}</h1></div>

  )
}

function Content(props) {
  // console.log(props);
  return (
    <div>
      <p>{props.part1}{props.exercise1}</p>
      <p> {props.part2}{props.exercise2}</p>
      <p>{props.part3}{props.exercise3}</p>
    </div>
  )
}

function Total(props) {
  return (
    <div>
      <p> {props.part4}{props.exercise4}</p>
    </div>
  )
}







function App() {


  let course = "Half stack application development";
  let part1 = 'Fundamentals of React';
  let exercise1 = 10;
  let part2 = 'Using props to pass data';
  let exercise2 = 7;
  let part3 = 'State of a component';
  let exercise3 = 14;
  let part4 = 'No.of Exercise';


  return (
    <div>

      <Header course={course} />


      <Content part1={part1} exercise1={exercise1}
        part2={part2} exercise2={exercise2}
        part3={part3} exercise3={exercise3}
      />

      <Total  part4={part4} exercise4={exercise1 + exercise2 + exercise3} />


    </div> 
  );
}

export default App;



