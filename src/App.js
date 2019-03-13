import React, { Component } from 'react';
import classes from './App.css';

import Person from './Person/Person';


class App extends Component {
 
  state = {
    persons: [
      {id: 'aw12', name: 'Aron', age: 26},
      {id: 'aw123', name: 'Mitch', age: 29},
      {id: 'aw124', name: 'Eileen', age: 55}
    ],
    otherState: 'some other state',
    showPersons: false
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  nameChangedHandler = (event, id) => {
   const personIndex = this.state.persons.findIndex(p =>{
     return p.id === id;
   })

   const person = {
     ...this.state.persons[personIndex]
   };

   person.name = event.target.value;

   const persons = [...this.state.persons];
   persons[personIndex] = person;
  
   
   
    this.setState({persons: persons} );
  }



  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }


  render() {
    


    let persons=null;

    let buttonClass='';

    if (this.state.showPersons){
      persons=(
      <div>
        {this.state.persons.map((person,index) => {
          return <Person
          click={()=>this.deletePersonHandler(index)} 
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event)=>this.nameChangedHandler(event, person.id)} />
        })}

      </div>
      );

      buttonClass = classes.Red;
  

    }

    let assignedClasses = [];

    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }

    if(this.state.persons.length <=0){
      assignedClasses.push(classes.border);
    }
    
    return (
      
      <div className={classes.App}>
        <h1>Hi, I am a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really awesome</p>
        <button 
        className={buttonClass}
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
