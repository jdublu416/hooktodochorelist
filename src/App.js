import React, { useState, useEffect } from 'react';
import './App.css';

// handles the Single chore
const Chore = ({ chore, index, completeChore, removeChore }) => {
  return (
    <div
      className='chore'
      style={{ textDecoration: chore.isCompleted ? 'line-through' : 'none' }}
    >
      {chore.text}

      <div>
        <button onClick={() => completeChore(index)} className='btnChore'>
          <span role='img' aria-label='check-mark'>
            ✅
          </span>
        </button>
        <button onClick={() => removeChore(index)} className='btnChore'>
          <span role='img' aria-label='cross-mark'>
            ❌
          </span>
        </button>
      </div>
    </div>
  );
};

// Handles the input for the user information
const ChoreForm = ({ addChore }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addChore(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Add chore...'
      />
    </form>
  );
};

function App() {
  const [chores, setChores] = useState([
    {
      text: 'Get this app done',
      isCompleted: false
    },
    {
      text: 'Make a playlist for coding',
      isCompleted: false
    },
    {
      text: 'Deploy this app',
      isCompleted: false
    }
  ]);
 
  

  const addChore = text => {
    const newChores = [...chores, { text }];
    setChores(newChores);
  };

  const completeChore = index => {
    const newChores = [...chores];
    newChores[index].isCompleted = !chores.isCompleted;
    setChores(newChores);
  };

  const removeChore = index => {
    const newChores =[...chores];
    newChores.splice(index, 1); //use index + splice to select where to begin splice and 1 remove
    setChores(newChores)
  }

  return (
    <div className='app'>
      <h1 style={{color:'#fff', textAlign: 'center'}}>My Chores for the Day</h1>
      <div className='chore-list'>
        {chores.map((chore, index) => (
          <Chore
            key={index}
            index={index}
            chore={chore}
            completeChore={completeChore}
            removeChore={removeChore}
          />
        ))}
        <ChoreForm addChore={addChore} />
      </div>
    </div>
  );
}

export default App;
