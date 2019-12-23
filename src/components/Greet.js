import React from 'react';

// function Greet(){
//   return <h1> Hello Darkonnen </h1>
// }

// export default Greet;

export const Greet = props => {
  return (
    <div>
      <h1> Hello, { props.name } a.k.a. { props.heroName } </h1>
      { props.children }
    </div>
  );
  }
