import React from 'react';
import FolderList from '../FolderList/FolderList'
import { Route, Switch } from 'react-router-dom';


function Sidebar(props) {
  return (
    <aside>
      <Switch>
        <Route path='/note/:id' render={({ history }) => <button onClick={history.goBack}>Go Back</button>} />
        <Route render={() => <FolderList folders={props.folders} />} />
      </Switch>
    </aside>
  );
}

export default Sidebar;