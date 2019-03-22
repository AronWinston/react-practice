
//useEffect is second most important react hook
import React, {useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) =>{

    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      //Http request...
      setTimeout(() => {
        alert('Saved data to cloud!')
      }, 1000);
      return ()=>{
        console.log('[Cockpit.js] cleanup work in useEffect');
      }
    }, []);

    useEffect(()=>{
      console.log('[Cockpit.js] 2nd useEffect');
      return ()=>{
        console.log('[Cockpit.js] cleanup work in 2nd useEffect');
      }
    })

    let assignedClasses = [];
    
    let buttonClass = '';

    if(props.showPersons){
        
        buttonClass = classes.Red;
    }

    

    if(props.personsLength <=2){
      assignedClasses.push(classes.red);
    }

    if(props.personsLength <=1){
      assignedClasses.push(classes.bold);
    }

    if(props.personsLength <=0){
      assignedClasses.push(classes.border);
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really awesome</p>
            <button 
                className={buttonClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(cockpit);