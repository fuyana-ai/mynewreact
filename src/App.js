import './App.css';
import { useState, useEffect } from 'react';

// const Person = (props) => {
//   return (
//     <>
//       <h1> Name: {props.name}</h1>
//       <h2> Last Name: {props.lastName}</h2>
//       <h2> Age: {props.age}</h2>
//     </>
//   )
// }

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
<h1>{counter}</h1>
<button> </button>

        {/* <header className="App-header">
        <h1> Hello World</h1>
        <h2> My name is {myname}</h2>
        <Person name='Lindsay'
          Lastname='Fuyana'
          Age={30} />

        <Person name={'Culani'}
          LastName='Fuy'
          Age={25} />

        <Person name={'Michell'}
          LastName='Shonge'
          Age={26} />

        <Person name={'Hilda'}
          LastName='MaNyathi'
          Age={10} />

        <Person name={'Anaya'}
          LastName='Anashe'
          Age={5} />


      </header> */}
    </div>
  );
}

export default App;
