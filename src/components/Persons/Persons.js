import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{ 
  // static getDerivedStateFromProps(props, state){ 
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }  

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnaphotBeforeUpdate');
    return {message: 'Snapshot recieved'};
  }


  //will use this Hook most often
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount')
  }
  
  render(){
      console.log('[Persons.js] rendering...');
      return this.props.persons.map((person,index) => {
        return (
        <Person
          click={()=>this.props.clicked(index)} 
          key={person.id}
          name={person.name}
          age={person.age}
        
          changed={(event)=>this.props.changed(event, person.id)}
          ageChanged = {(e)=>this.props.ageChanged(e, person.id)} />
        );
      });
    };
  }

    export default Persons;