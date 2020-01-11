import React from 'react';
import NotefulContext from '../NotefulContext';
import { withRouter } from 'react-router-dom';
import ValidationError from '../ValidationError/ValidationError';
import './AddNote.css';

class AddNote extends React.Component {
  state = {
    name: {
      value: '',
      touched: false
    },
    folderId: {
      value: ''
    },
    content: {
      value: '',
      touched: false
    }
  }

  changePage = () => {
    this.props.history.push('/');
  }

  updateName(noteName) {
    this.setState({
      name: {
        value: noteName,
        touched: true
      }
    });
  }

  updateContent(content) {
    this.setState({
      content: {
        value: content,
        touched: true
      }
    });
  }

  validateName() {
    const name = this.state.name.value.trim();

    if (name.length === 0) {
      return 'name is required'
    }
    else if (name.length < 3 || name.length > 30) {
      return 'name must be betweeen 3 and 30 characters'
    }
    else if (name.match(/[0-9]/g)) {
      return 'name can\'t contain numbers'
    }
  }

  validateContent() {
    const content = this.state.content.value.trim();

    if (content.length === 0) {
      return 'please enter content for your note'
    } else if (content.length > 5000) {
      return 'please limit the number of characters to be less than 150'
    }

  }

  render() {

    const nameError = this.validateName();
    const noteError = this.validateContent();

    return (
      <NotefulContext.Consumer>
        {value => {
          return (
            <form className='add-note-form' onSubmit={(e) => value.addNote(e, this.changePage)}>
              <label id='name' htmlFor='name'>Name</label>
              <input aria-labelledby='name' name='name' type='text' onChange={(e) => this.updateName(e.target.value)} />
              {this.state.name.touched && <ValidationError message={nameError} />}

              <label id='folderId' htmlFor='folderId'>Folder ID</label>
              <select aria-labelledby='folderId' name='folderId'>
                {value.folders.map(folder => <option key={folder.id} value={folder.id}>{folder.name}</option>)}
              </select>

              <label id='content' htmlFor='content'>Content</label>
              <textarea aria-labelledby='content' name='content' type='text' onChange={(e) => this.updateContent(e.target.value)} />
              {this.state.content.touched && <ValidationError message={noteError} />}

              <button aria-label='Add a note' type='submit'>Add Note</button>
            </form>
          );
        }
        }
      </NotefulContext.Consumer>
    );
  }
}

export default withRouter(AddNote);