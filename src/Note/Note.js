import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Note.css';
import NotefulContext from '../NotefulContext';

function Note(props) {
  return (
    <NotefulContext.Consumer>
      {value => {
        return (
          <>
            <Link to={`/note/${props.note.id}`}>
              <h3>{props.note.name}</h3>
            </Link>
            <p>{props.note.modified}</p>
            <button onClick={() => value.delete(props.note.id)}>Delete</button>
            <Route path='/note/:id' render={() => <p>{props.note.content}</p>} />
          </>
        );
      }}
    </NotefulContext.Consumer>
  );
}

export default Note;