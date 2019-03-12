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
    otherState: 'some other state',
    showPersons: false
  }

  changeNameHandler = (newName) => {
    // console.log('was clicked');
    // DONT DO LIKE THIS this.state.persons[0].name="Aron Winston"
    this.setState({persons: [
      {name: newName, age: 26},
      {name: 'Mitchell Winston', age: 29},
      {name: newName, age: 30}
    ]
   })
  }

  nameChangedHandler = (event) => {
   this.setState({persons: [
      {name: event.target.value, age: 26},
      {name: "Alex", age: 29},
      {name: "John", age: 30}
    ]
   } )
  }



  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }


  render() {
    
    const style = {
      backGroundColor: 'yellow',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons=null;

    if (this.state.showPersons){
      persons=(
      <div>
      <Person 
      name= {this.state.persons[0].name} 
      age={this.state.persons[0].age}
      changed={this.nameChangedHandler}/>
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age} 
      click={this.changeNameHandler.bind(this, 'Mandinko')}
      changed={this.nameChangedHandler}>My Hobbies: Fishing</Person>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}
      click={this.changeNameHandler.bind(this, 'Legend')}/>
      </div>
      );
    }
    
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really awesome</p>
        <button 
        style = {style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>

            <div>
              {persons}
            </div>

 
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does this work'))
  }
}

export default App;
