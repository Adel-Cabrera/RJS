import React from 'react';
import People from './People'

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana'];
  const nameList = names.map(name => <h2> {name} </h2>);
  const people = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React',
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular',
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue',
    }
  ]
  const peopleList = people.map(p => <People people={p}/>);
  return(
    <div>
    {
      nameList
    }
    {
      peopleList
    }

    </div>
  );
}

export default NameList;
