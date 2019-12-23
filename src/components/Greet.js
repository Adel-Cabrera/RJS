import React from 'react';

// function Greet(){
//   return <h1> Hello Darkonnen </h1>
// }

// export default Greet;

export const Greet = ({ name, heroName, children }) => {
  return (
    <div>
      <h1> Hello, { name } a.k.a. { heroName } </h1>
      { children }
    </div>
  );
  }

  // export const Greet = props => {
  //   const { name, heroName, children } = props;
  //   return (
  //     <div>
  //       <h1> Hello, { name } a.k.a. { heroName } </h1>
  //       { children }
  //     </div>
  //   );
  //   }
