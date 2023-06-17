

//Task1 - project creation in VS code



//Task2 - 
//1.Just create variable declaration for given data.
//2. Given output we will create similar(ref photo )




function App() {
let course="Half stack application development";
let part1='Fundamentals of React';
let exercise1= 10;
let part2 ='Using props to pass data';
let exercise2=7;
let part3='State of a a component';
let exercise3=14;
let part4='No.of Exercise';


return (
  <div> 
  <h1>{course}</h1> 
  <p>{part1}{exercise1}</p>
  <p>{part2}{exercise2}</p>
  <p>{part3}{exercise3}</p>
  <p>{part4}{exercise1+exercise2+exercise3}</p>


    </div>
  );
}

export default App;


