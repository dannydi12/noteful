import React from 'react';
import Note from '../Note/Note';

function NoteList(props) {
  const notes = props.notes.map(note => <Note key={note.id} note={note} />);
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