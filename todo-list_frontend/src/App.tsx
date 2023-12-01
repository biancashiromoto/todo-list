import { useEffect } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  
  useEffect(() => {
    axios.get("http://localhost:3000/tasks").then(response => {
      console.log(response.data);
    })
  }, []);

  return (
    <>
      <h1>Todo list</h1>
    </>
  )
}

export default App;
