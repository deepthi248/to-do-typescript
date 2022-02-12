import React, { useState } from 'react';

import './App.css';
import Heading from './Components/Heading';
import { ToDoInput } from './Components/ToDoInput';
import { toDoType } from './Interfaces';

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>('');
  const [toDos, setToDos] = useState<toDoType[]>([]);

  const handleAddInput = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setToDos(
      [...toDos,
      {
        id: Date.now(),
        todo: toDo,
        isCompleted: false

      }]
    )

  }
  console.log(toDos);
  return (
    <div className="App">
      <Heading />
      <ToDoInput toDoText={toDo} setToDo={setToDo} handleAddInput={handleAddInput} />
    </div>
  );
}

export default App;
