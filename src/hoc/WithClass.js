import React from 'react';

const withClass = (WrappedComponent, className) => {
   return props => (
      <div className={className}>
      <WrappedComponent {...props} />
      </div>
   );
}

export default withClass;

// first way of using higher order components as a function
// const withClass = (props) => {
//    return (<div className = {props.classes}>
//     {props.children}
//     </div>
//    );
// }