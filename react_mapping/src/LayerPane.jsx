import React from 'react';
import './LayerPane.css';
import CoordinatesList from './CoordinatesList'

export default function LayerPane(){
  return (
    <div className="pane">
        <CoordinatesList/>
    </div>
  );
}