import React from 'react';
import NotefulContext from '../NotefulContext';
import { withRouter } from 'react-router-dom';
import ValidationError from '../ValidationError/ValidationError'

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
    
    if (content.length === 0){
      return 'please enter content for your note'
    } else if (content.length > 5000){
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
            <form onSubmit={(e) => value.addNote(e, this.changePage)}>
              <label htmlFor='name'>Name</label>
              <input name='name' type='text' onChange={(e) => this.updateName(e.target.value)} />
              {this.state.name.touched && <ValidationError message={nameError}/>}
              
              <label htmlFor='folderId'>Folder ID</label>
              <select name='folderId'>
                {value.folders.map(folder => <option key={folder.id} value={folder.id}>{folder.name}</option>)}
              </select>

              <label htmlFor='content'>Content</label>
              <textarea name='content' type='text' />
              {this.state.name.touched && <ValidationError message={noteError}/>}

              <button type='submit'>Add Note</button>
            </form>
          );
        }
        }
      </NotefulContext.Consumer>
    );
  }
}

export default withRouter(AddNote);