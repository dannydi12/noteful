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
   name: 'empty', 
   content:'Default Content', 
   modified:'defaultDate',
   folderId:'defaultFolder Id' }]
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({ 
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
    folderId: PropTypes.string.isRequired
  }))
};

export default NoteList;