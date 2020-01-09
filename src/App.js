import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import NoteList from './NoteList/NoteList';
import Note from './Note/Note';
import NotefulContext from './NotefulContext';
import AddFolder from './AddFolder/AddFolder';
import MainError from './Error/MainError';
import AddNote from './AddNote/AddNote';
import moment from 'moment';


class App extends React.Component {
  state = {
    folders: [],
    notes: []
  }

  updateState = (data, store) => {
    this.setState({
      [store]: data
    })
  }

  getStore = (endpoint) => {
    const url = `http://localhost:9090/${endpoint}`

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error(res.ok)
        }
        return res;
      })
      .then(res => res.json())
      .then(jsonRes => this.updateState(jsonRes, endpoint))
      .catch(err => console.log(`Oops: ${err}`));
  }

  deleteNote = (id) => {
    const url = `http://localhost:9090/notes/${id}`

    fetch(url, { method: 'DELETE', headers: { 'content-type': 'application/json' } })
      .then(res => {
        if (!res.ok) {
          throw Error(res.ok)
        }
        return res;
      })
      .then(res => {
        this.getStore('folders');
        this.getStore('notes');
      })
      .catch(err => console.log(`Oops: ${err}`));
  }

  addFolder = (event, callback) => {
    event.preventDefault();
    const url = `http://localhost:9090/folders`

    fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name: event.target.name.value }) })
      .then(res => {
        if (!res.ok) {
          throw Error(res.ok)
        }
        return res.json();
      })
      .then(res => {
        this.updateState([...this.state.folders, res], 'folders')
        callback();
        return res;
      })
      .catch(err => console.log(`Oops: ${err}`));
  }

  addNote = (event, callback) => {
    event.preventDefault();
    const url = `http://localhost:9090/notes`

    fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name: event.target.name.value, folderId: event.target.folderId.value, modified: moment().format(), content: event.target.content.value }) })
      .then(res => {
        if (!res.ok) {
          throw Error(res.ok)
        }
        return res.json();
      })
      .then(res => {
        this.updateState([...this.state.notes, res], 'notes')
        callback();
        return res;
      })
      .catch(err => console.log(`Oops: ${err}`));
  }

  componentDidMount() {
    this.getStore('folders');
    this.getStore('notes');
  }

  render() {
    return (
      <>
        <header>
          <Link to='/'>
            <h1>Noteful</h1>
          </Link>
        </header>
        <NotefulContext.Provider value={{
          folders: this.state.folders,
          notes: this.state.notes,
          delete: this.deleteNote,
          addFolder: this.addFolder,
          addNote: this.addNote
        }}>
          <MainError>
            <Sidebar />
          </MainError>
          <main>
            <MainError>
              <Switch>
                <Route exact path='/' render={(routeProps) => <NoteList {...routeProps} notes={this.state.notes} />} />
                <Route exact path='/folder/:id' render={(routeProps) => <NoteList {...routeProps} notes={this.state.notes.filter(note => note.folderId === routeProps.match.params.id)} />} />
                <Route exact path='/note/:id' render={({ match }) => <Note note={this.state.notes.find(note => note.id === match.params.id)} />} />
                <Route exact path='/add-folder' component={AddFolder} />
                <Route exact path='/add-note' component={AddNote} />
                <Route render={() => <p>There are no notes to display.</p>} />
              </Switch>
            </MainError>
          </main>
        </NotefulContext.Provider>
      </>
    );
  }
}

export default App;
