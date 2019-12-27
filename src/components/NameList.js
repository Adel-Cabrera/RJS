import React from 'react';
import People from './People'

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana'];
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
  ];
  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);

  const peopleList = people.map(p => <People key={p.id} people={p}/>);
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
