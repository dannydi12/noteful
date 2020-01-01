import React from 'react';

function NoteList(props) {
  const notes = props.notes.map(note => (
    <li key={note.id}>
      <h3>{note.name}</h3>
      <p>{note.modified}</p>
      <button>Delete</button>
    </li>
  ));
  return (
    <>
      <ul>
        {notes}
      </ul>
      <button>Add Note</button>
    </>
  );
}

export default NoteList;