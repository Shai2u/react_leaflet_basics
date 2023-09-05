import React from 'react';
import './TitleNav.css';

export default function TitleNav({init_title}){
  const [title] = React.useState(init_title);
  return (
    <div className="heading">
    <h1>{title}</h1>
    </div>
  );
}