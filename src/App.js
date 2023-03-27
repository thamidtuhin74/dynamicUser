import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
    <Counter></Counter>

    <DynamicUsers></DynamicUsers>
    </div>
  );
}

function DynamicUsers(){
  const[users , setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      // console.log(data);

  },[]);
  return (
    <div>
      <h2>Dynamic User</h2>
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }

    </div>
  );
}

function User(props){
  return(
    <div>
      <h3>name : {props.name}</h3>
      <p>Email : {props.email}</p>
    </div>
  );
}


function Counter(){
  const [count , setCount] = useState(33);
  const increasement = () =>{
    return setCount(count+1);
  }
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={increasement} >increase </button>
      <button onClick={()=>setCount(count-1)} >decrease </button>

      {/* <button onClick={()=>setCount(count+1)} >increase </button> */}

    </div>
  );
}

export default App;
