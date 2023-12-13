import React from 'react';
import Project from './Project';
import '../css/Projects.css';

export default function Projects(props) {
  return (
    <div className="images">
      {props.pics.map((pic) => (
        <Project
          pic={pic}
          key={Math.random()
            .toString()
            .slice(2, 10)}
        />
      ))}
    </div>
  );
}