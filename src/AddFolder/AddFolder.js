import React from 'react';
import NotefulContext from '../NotefulContext';
import { withRouter } from 'react-router-dom';
import ValidationError from '../ValidationError/ValidationError';
import './AddFolder.css';

class AddFolder extends React.Component {
  state = {
    name: {
      value: '',
      touched: false
    }
  }

  changePage = () => {
    this.props.history.push('/');
  }

  updateName(folderName) {
    this.setState({
      name: {
        value: folderName,
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

  render() {
    const nameError = this.validateName();
    return (
      <NotefulContext.Consumer>
        {value => {
          return (
            <form className='add-folder-form' onSubmit={(e) => value.addFolder(e, this.changePage)}>
              <label htmlFor='name'>Name</label>
              <input name='name' type='text' onChange={(e) => this.updateName(e.target.value)} />
              {this.state.name.touched && <ValidationError message={nameError} />}
              <button aria-label='Add a folder' disabled={this.validateName()} type='submit'>Add Folder</button>
            </form>
          );
        }
        }
      </NotefulContext.Consumer>
    );
  }
}

export default withRouter(AddFolder);