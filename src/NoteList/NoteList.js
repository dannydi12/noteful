import React from 'react';
import Note from '../Note/Note';
import PropTypes from 'prop-types';

function NoteList(props) {
  const notes = props.notes.map(note => <li className='note' key={note.id}><Note note={note} /></li>);
  return (
    <>
      <ul>
        {notes}
      </ul>
      <button onClick={() => props.history.push('/add-note')}>Add Note</button>
    </>
  );
}

NoteList.defaultProps = {
  notes: [{ id: '0',
   note_name: 'empty', 
   content:'Default Content', 
   modified:'defaultDate',
   folder_id: 1 }]
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({ 
    id: PropTypes.number.isRequired,
    note_name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
    folder_id: PropTypes.number.isRequired
  }))
};

export default NoteList;