import React, { Component } from 'react';
import MyComponent from './components/MyComponent'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      Style:{
        visibility:'hidden'
      }
    }
  }
   onButtonSubmit = function(e){
    console.log('Hare Krishna')
    alert('Hare Krishna')
    e.preventDefault()
    if (this.state.Style.visibility ==="hidden") {
      this.setState({
        Style:{
          visibility:'visible'
        }
      })
    } else{
      this.setState({
        Style:{
          visibility:'hidden'
        }
      })
    } 
  }
  render() {
    return (
      <div className="App">
        <MyComponent />
        <div style={this.state.Style}>Hello World!</div>
        <form onSubmit={this.onButtonSubmit.bind(this)}>
          First Name :<br></br>
          <input type='text' placeholder='Micky'></input>
          <br></br>
          Last Name :<br></br>
          <input type='text' placeholder='Mouse' ></input><br></br>
          <input type='submit' value='submit'></input><br></br>
        </form>
        
      </div>
    );
  }
}

export default App;
