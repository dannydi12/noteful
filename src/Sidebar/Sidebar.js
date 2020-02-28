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
                  const folderId = value.notes.find(note => note.id === Number(routerProps.match.params.id)).folder_id;
                  return folderId === folder.id;
                }).folder_name
                }</h2> 
                <button onClick={routerProps.history.goBack}>Go Back</button>
              </>)} />
            <Route render={({history}) => <FolderList history={history} folders={value.folders} />} />
          </Switch>
        </aside>);
      }}
    </NotefulContext.Consumer>
  );
}

export default Sidebar;