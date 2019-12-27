import React from 'react';

function People({people}){
  return(
    <div>
      <h2>
       I am {people.name}, I am {people.age} years old and I know {people.skill}.
      </h2>
    </div>
  );
}

export default People;
