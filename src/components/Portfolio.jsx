import React, { useState } from 'react';
import Filters from './Filters';
import Projects from './Projects';
import pics from '../data/pics';

export default function Portfolio() {
  const [activeTag, setActiveTag] = useState(null);
  const [activePics, setActivePics] = useState(pics);

  const categories = Array.from(new Set(pics.map(pic => pic.category)))

  const onChoose = tag => {
    setActiveTag(tag);
    if (tag === 'All') return setActivePics(pics);
    const activePics = pics.filter(pic => pic.category === tag);
    setActivePics(activePics);
  };

  return (
    <div>
      <Filters
        onChoose={onChoose}
        categories={['All', ...categories]}
        activeTag={activeTag}
      />
      <Projects pics={activePics} />
    </div>
  );
}