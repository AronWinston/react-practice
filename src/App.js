import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 
  state = {
    persons: [
      {name: 'Aron', age: 26},
      {name: 'Mitch', age: 29},
      {name: 'Eileen', age: 55}
    ],
    otherState: 'some other state'
  }

  changeNameHandler = (newName) => {
    // console.log('was clicked');
    // DONT DO LIKE THIS this.state.persons[0].name="Aron Winston"
    this.setState({persons: [
      {name: newName, age: 26},
      {name: 'Mitchell Winston', age: 29},
      {name: 'Eileen Ann Winston', age: 30}
    ]
   })
  }

  nameChangedHandler = (event) => {
   this.setState({persons: [
      {name: 'Aron', age: 26},
      {name: event.target.value, age: 29},
      {name: 'Eileen Ann Winston', age: 30}
    ]
   } )
  }


  render() {
    
    const style = {
      backGroundColor: 'yellow',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really awesome</p>
        <button 
        style = {style}
        onClick={() =>this.changeNameHandler('A Wiggles')}>Switch Name</button>
        <Person 
        name= {this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.changeNameHandler.bind(this, 'Mandinko')}
        changed={this.nameChangedHandler}>My Hobbies: Fishing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does this work'))
  }
}

export default App;
