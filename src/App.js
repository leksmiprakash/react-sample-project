import React, {Component} from 'react';
import './App.css';
import reactDom from 'react-dom';
import {Button} from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter ,
  Link,
  Route,
  Routes
} from 'react-router-dom';
import Header from './Components/Header';
import FormInsert from './Components/FormInsert';
import ToDoList from './Components/ToDoList';
import Home from './Components/Home';


class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="container-fluid">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>}> </Route>
            <Route  path="/form" element={<FormInsert/>}> </Route>
            <Route  path="/todo" element={<ToDoList/>}> </Route>
          </Routes> 
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
