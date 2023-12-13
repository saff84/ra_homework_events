import React from 'react';

export default function Project(props) {
  return <img src={props.pic.img} alt={props.pic.category} />;
}