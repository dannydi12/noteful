import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
// import FolderList from './FolderList/FolderList';
import NoteList from './NoteList/NoteList';
import store from './store'

class App extends React.Component {
  state = {
    folders: store.folders,
    notes: store.notes
  }

  render() {
    return (
      <>
        <header>
          <Link to='/'>
            <h1>Noteful</h1>
          </Link>
        </header>
        <Sidebar folders={this.state.folders}/>
        <main>
          <Route exact path='/' render={() => <NoteList notes={this.state.notes} />} />
          <Route exact path='/folder/:id' render={({match}) => <NoteList  notes={this.state.notes.filter(note => note.folderId === match.params.id)} />} />
        </main>
      </>
    );
  }
}

export default App;
