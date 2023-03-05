import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem(){

    if(!newItem){
      alert('Enter an item');
      return;
    }
    
    const item = {
      id: Math.floor(Math.random()*1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");


  }

  function deleteItem(id){
      const newArray = items.filter(item => item.id !== id );
      setItems(newArray);
  }

  return (
    <div className="App">
      {/* 1.Header */}
      <h1>Todo List App</h1>

      {/* 2.Input (input and button) */}

      <input
        type="text"
        placeholder='Add an item...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={()=> addItem()}>Add</button>

      {/* 3.List of items */}

      <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value} <button className='delete-button' onClick={()=> deleteItem(item.id)}>❌</button></li>
          )
        })}
      </ul>


    </div>
  );
}

export default App;
