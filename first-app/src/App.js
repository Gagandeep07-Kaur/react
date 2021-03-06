import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './Components/component_function.js';
import Learning from './Components/component_class.js';
import A from './Components/A.js';
import B from './Components/B.js';
import Validation from './Components/validation.js';
import Message from './Components/message.js';
import Calculator from './Components/boiling.js';
import Routing from './Components/routing.js';


class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        isLogin: 'false',
        inputValue: "",
      }; 
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };


  handleClick() {
    this.setState(state => ({
      isLogin: !state.isLogin
    }));
  }


  render() {
    const greeting = 'Welcome to React'; 
    return (
      <div className="App">
         <Routing/> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            </a>

            <h1>{greeting}</h1>
             
            <Learning value="Login Form"/>  
            <Hello/>      

            <div onChange={this.handleChange}>
              <A/>
              <B text= {this.state.inputValue}/>
            </div>

            <Message/>
            <hr/>

            <Calculator/>

            <Validation/>
          
        </header>
      </div>          
            
          
    );
  }
}
export default App;
