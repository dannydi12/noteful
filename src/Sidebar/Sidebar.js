import React from 'react';
import FolderList from '../FolderList/FolderList'
import { Route, Switch } from 'react-router-dom';
import './Sidebar.css';

function Sidebar(props) {
  return (
    <aside>
      <Switch>
        <Route path='/note/:id' render={(routerProps) => (
          <>
            <h2>{props.folders.find(folder => {
              const folderId = props.notes.find(note => note.id === routerProps.match.params.id).folderId;
              return folderId === folder.id;
            }).name
            }</h2> 
            <button onClick={routerProps.history.goBack}>Go Back</button>
          </>)} />
        <Route render={() => <FolderList folders={props.folders} />} />
      </Switch>
    </aside>
  );
}

export default Sidebar;