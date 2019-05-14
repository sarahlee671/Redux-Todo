import React from 'react';

import './App.css';

import TodoList from '../src/components/TodoList'



function App() {
    return (
      <div className="App">
        <h1 className="title">Redux Todo List</h1>
          <TodoList />
      </div>
    );
}



export default App;
