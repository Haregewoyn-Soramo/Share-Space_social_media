import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Create from './Components/Create'

function App() {
 

  return (
  
  
      <div className='App'>
      <NavBar/>
      <div className='content'>
          <Home/>
         <Create/>
     </div>
     </div>
  )
}

export default App;
