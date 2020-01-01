import React from 'react';
import Note from '../Note/Note';

function NoteList(props) {
  const notes = props.notes.map(note => <li className='note' key={note.id}><Note note={note} /></li>);
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