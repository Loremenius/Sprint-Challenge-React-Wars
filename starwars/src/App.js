import React, {useState,useEffect} from 'react';
import './App.css';
import axios from "axios";
import CreatePersonCard from "./components/CreatePeopleCard";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('https://swapi.co/api/people/')
    .then( (response)=> {
      // handle success
      setData(response.data.results);
       
     })
     .catch(function (error) {
      // handle error
       console.log(error);
     });
  },[]);

  console.log(data);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="cards">
      {data.map((item,index)=>(
        <CreatePersonCard key={index} object={item}/>
      ))}
      </div>
    </div>
  );
}

export default App;
