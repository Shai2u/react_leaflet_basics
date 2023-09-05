import React from 'react';
import './LayerPane.css';
import TodoList from './TodoList'

export default function LayerPane(){
  return (
    <div className="pane">
        <TodoList/>
    </div>
  );
}