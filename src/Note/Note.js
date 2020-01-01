import React from 'react';

function Note(props) {
  return(
    <li>
      <h3>{props.note.name}</h3>
      <p>{props.note.modified}</p>
      <button>Delete</button>
    </li>
  );
}

export default Note;