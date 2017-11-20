import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './common/components/TextInput';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputValue : ''
    }
    this.updateOnChange = this.updateOnChange.bind(this);
  }
  updateOnChange(event){
    this.setState({inputValue: event.target.value});
  }
  render() {
    return (
      <div className="App">
        
        <TextInput
         updateValue = {this.updateOnChange}
         value = {this.state.inputValue}
        />
        Value : {this.state.inputValue}
      </div>
    );
  }
}

export default App;
