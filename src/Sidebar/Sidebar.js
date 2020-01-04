import React from 'react';
import FolderList from '../FolderList/FolderList'
import { Route, Switch } from 'react-router-dom';
import './Sidebar.css';
import NotefulContext from '../NotefulContext';

function Sidebar(props) {
  return (
    <NotefulContext.Consumer>
      {value => {
        return(
        <aside>
          <Switch>
            <Route path='/note/:id' render={(routerProps) => (
              <>
                <h2>{value.folders.find(folder => {
                  const folderId = value.notes.find(note => note.id === routerProps.match.params.id).folderId;
                  return folderId === folder.id;
                }).name
                }</h2> 
                <button onClick={routerProps.history.goBack}>Go Back</button>
              </>)} />
            <Route render={() => <FolderList folders={value.folders} />} />
          </Switch>
        </aside>);
      }}
    </NotefulContext.Consumer>
  );
}

export default Sidebar;