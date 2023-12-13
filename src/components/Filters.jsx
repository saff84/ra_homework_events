import React from 'react';
import '../css/Filters.css';

export default function Filters(props) {
  const onChoose = props.onChoose;
  const categories = props.categories;

  return (
    <div className="filters">
      {categories.map(cat => (
        <button
          onClick={() => onChoose(cat)}
          className={props.activeTag === cat ? 'black button' : 'button'}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}